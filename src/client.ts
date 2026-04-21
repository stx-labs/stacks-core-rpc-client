import createOpenApiClient, { type ClientOptions } from "openapi-fetch";
import type { paths } from "./generated/schema.js";
import type {
  CoreRpcClient,
  CoreRpcMethod,
  CoreRpcPath,
  CoreRpcResponse,
  CoreRpcRawClient,
} from "./types.js";

const AUTH_REQUIRED_PATHS = new Set<string>([
  "/v2/contracts/call-read/{deployer_address}/{contract_name}/{function_name}",
  "/v3/block_proposal",
  "/v3/blocks/upload",
  "/v3/blocks/replay/{block_id}",
  "/v3/blocks/simulate/{block_id}",
]);

type RawResult<TData, TError> = {
  data?: TData;
  error?: TError;
  response: Response;
};

function createRawClient(options: ClientOptions) {
  return createOpenApiClient<paths>(options);
}

export type { CoreRpcClient, CoreRpcRawClient };

export type StacksNetworkLike = {
  client: { baseUrl: string; fetch?: typeof globalThis.fetch };
};

export type CoreRpcClientOptions = {
  baseUrl?: string;
  authToken?: string;
  fetch?: typeof globalThis.fetch;
  headers?: HeadersInit;
};

function isStacksNetworkLike(value: unknown): value is StacksNetworkLike {
  if (typeof value !== "object" || value === null) return false;
  const client = (value as Record<string, unknown>).client;
  return (
    typeof client === "object" &&
    client !== null &&
    typeof (client as Record<string, unknown>).baseUrl === "string"
  );
}

export type BinaryBody = Uint8Array | ArrayBuffer | Buffer;

export function toBinaryBody(input: BinaryBody): ArrayBuffer | Uint8Array {
  if (input instanceof Uint8Array) {
    return input;
  }

  if (typeof Buffer !== "undefined" && Buffer.isBuffer(input)) {
    return input;
  }

  return input;
}

export class CoreRpcError extends Error {
  readonly status: number;
  readonly url: string;
  readonly method: string;
  readonly details: unknown;

  constructor(
    message: string,
    init: { status: number; url: string; method: string; details: unknown },
  ) {
    super(message);
    this.name = "CoreRpcError";
    this.status = init.status;
    this.url = init.url;
    this.method = init.method;
    this.details = init.details;
  }
}

function isAuthRequired(schemaPath: string): boolean {
  return AUTH_REQUIRED_PATHS.has(schemaPath);
}

async function unwrap<TData, TError>(
  promise: Promise<RawResult<TData, TError>>,
): Promise<TData> {
  const result = await promise;

  if (!result.response.ok || result.error !== undefined) {
    throw new CoreRpcError(
      `RPC request failed with status ${result.response.status}`,
      {
        status: result.response.status,
        url: result.response.url,
        method: "unknown",
        details: {
          error: result.error ?? result.data,
        },
      },
    );
  }

  if (result.data === undefined) {
    throw new CoreRpcError("RPC request succeeded without response payload", {
      status: result.response.status,
      url: result.response.url,
      method: "unknown",
      details: null,
    });
  }

  return result.data as TData;
}

export function createCoreRpcClient(
  networkOrOptions?: StacksNetworkLike | CoreRpcClientOptions,
  overrides?: Omit<CoreRpcClientOptions, "baseUrl">,
): CoreRpcClient {
  let baseUrl: string;
  let authToken: string | undefined;
  let fetch: typeof globalThis.fetch;
  let headers: HeadersInit;

  if (isStacksNetworkLike(networkOrOptions)) {
    baseUrl = networkOrOptions.client.baseUrl;
    authToken = overrides?.authToken;
    fetch = overrides?.fetch ?? networkOrOptions.client.fetch ?? globalThis.fetch;
    headers = overrides?.headers ?? {};
  } else {
    const options = networkOrOptions ?? {};
    baseUrl = options.baseUrl ?? "http://localhost:20443";
    authToken = options.authToken;
    fetch = options.fetch ?? globalThis.fetch;
    headers = options.headers ?? {};
  }

  const raw = createRawClient({
    baseUrl,
    fetch,
    headers,
  });

  raw.use({
    async onRequest({ request, schemaPath }) {
      if (authToken && isAuthRequired(schemaPath)) {
        request.headers.set("authorization", authToken);
      }

      return request;
    },
  });

  return {
    raw,
    request<TMethod extends CoreRpcMethod, TPath extends CoreRpcPath<TMethod>>(
      method: TMethod,
      path: TPath,
      init?: unknown,
    ): Promise<CoreRpcResponse<TMethod, TPath>> {
      switch (method) {
        case "GET":
          return unwrap(raw.GET(path as never, init as never)) as Promise<
            CoreRpcResponse<TMethod, TPath>
          >;
        case "POST":
          return unwrap(raw.POST(path as never, init as never)) as Promise<
            CoreRpcResponse<TMethod, TPath>
          >;
        case "PUT":
          return unwrap(raw.PUT(path as never, init as never)) as Promise<
            CoreRpcResponse<TMethod, TPath>
          >;
        case "DELETE":
          return unwrap(raw.DELETE(path as never, init as never)) as Promise<
            CoreRpcResponse<TMethod, TPath>
          >;
      }
    },
  };
}
