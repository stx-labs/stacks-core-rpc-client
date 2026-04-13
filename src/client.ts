import createOpenApiClient, { type ClientOptions } from "openapi-fetch";
import type { paths } from "./generated/schema.js";

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

export type CoreRpcRawClient = ReturnType<typeof createRawClient>;

export type CoreRpcClientOptions = {
  baseUrl?: string;
  authToken?: string;
  fetch?: typeof globalThis.fetch;
  headers?: HeadersInit;
};

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

  constructor(message: string, init: { status: number; url: string; method: string; details: unknown }) {
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

async function unwrap<TData, TError>(promise: Promise<RawResult<TData, TError>>): Promise<TData> {
  const result = await promise;

  if (!result.response.ok || result.error !== undefined) {
    throw new CoreRpcError(`RPC request failed with status ${result.response.status}`, {
      status: result.response.status,
      url: result.response.url,
      method: "unknown",
      details: {
        error: result.error ?? result.data,
      },
    });
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

export function createCoreRpcClient(options: CoreRpcClientOptions = {}) {
  const {
    baseUrl = "http://localhost:20443",
    authToken,
    fetch = globalThis.fetch,
    headers = {},
  } = options;

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
    async request(method: "GET" | "POST" | "PUT" | "DELETE", path: string, init?: unknown) {
      switch (method) {
        case "GET":
          return unwrap(raw.GET(path as never, init as never));
        case "POST":
          return unwrap(raw.POST(path as never, init as never));
        case "PUT":
          return unwrap(raw.PUT(path as never, init as never));
        case "DELETE":
          return unwrap(raw.DELETE(path as never, init as never));
      }
    },
  };
}
