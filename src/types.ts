import type {
  Client,
  ClientPathsWithMethod,
  MethodResponse,
} from "openapi-fetch";
import type { components, paths } from "./generated/schema.js";

type CoreRpcComponentSchemas = components["schemas"];
type CoreRpcComponentSchemaName = keyof CoreRpcComponentSchemas;
type CoreRpcComponentSchema<TName extends CoreRpcComponentSchemaName> =
  CoreRpcComponentSchemas[TName];
type ToHttpMethod<TMethod extends CoreRpcMethod> = TMethod extends "GET"
  ? "get"
  : TMethod extends "POST"
    ? "post"
    : TMethod extends "PUT"
      ? "put"
      : "delete";

/**
 * A Stacks network like object. Used to create a Core RPC client from a Stacks network as used by
 * `@stacks/network`.
 */
export type StacksNetworkLike = {
  client: { baseUrl: string; fetch?: typeof globalThis.fetch };
};

/**
 * Options for creating a Core RPC client.
 */
export type CoreRpcClientOptions = {
  /** The base URL of the Stacks core RPC endpoint. */
  baseUrl?: string;
  /** The authentication token to use for the Stacks core RPC endpoint. */
  authToken?: string;
  /** The fetch function to use for the Stacks core RPC endpoint. */
  fetch?: typeof globalThis.fetch;
  /** The headers to use for the Stacks core RPC endpoint. */
  headers?: HeadersInit;
};

/** A raw Core RPC client. */
export type CoreRpcRawClient = Client<paths, `${string}/${string}`>;
/** The HTTP method to use for a Core RPC request. */
export type CoreRpcMethod = "GET" | "POST" | "PUT" | "DELETE";
/** The path to request. */
export type CoreRpcPath<TMethod extends CoreRpcMethod> = ClientPathsWithMethod<
  CoreRpcRawClient,
  ToHttpMethod<TMethod>
>;
/** The response payload for a Core RPC request. */
export type CoreRpcResponse<
  TMethod extends CoreRpcMethod,
  TPath extends CoreRpcPath<TMethod>,
  TOptions = unknown,
> = MethodResponse<CoreRpcRawClient, ToHttpMethod<TMethod>, TPath, TOptions>;

/**
 * A Stacks core RPC client.
 *
 * Use {@link CoreRpcClient.request | request} for the high-level API that automatically
 * authenticates requests, unwraps responses and throws {@link CoreRpcError} on failure.
 *
 * Use {@link CoreRpcClient.raw | raw} when you need full control over the response (e.g. inspecting
 * headers, custom error handling, streaming, or adding middleware via `raw.use(...)`).
 */
export type CoreRpcClient = {
  /**
   * The underlying `openapi-fetch` client.
   *
   * Unlike {@link CoreRpcClient.request | request}, calls made through `raw`
   * return the full `{ data, error, response }` result, giving you direct
   * access to the {@link Response} object, headers, status codes, and streams.
   */
  raw: CoreRpcRawClient;
  /**
   * Sends an RPC request to Stacks core.
   * @param method - The HTTP method to use.
   * @param path - The path to request.
   * @param init - The init object to use.
   * @returns The typed response payload.
   */
  request<TMethod extends CoreRpcMethod, TPath extends CoreRpcPath<TMethod>>(
    method: TMethod,
    path: TPath,
    init?: unknown,
  ): Promise<CoreRpcResponse<TMethod, TPath>>;
};

export type NodeInfo = CoreRpcComponentSchema<"node-info.schema">;
export type PoxInfo = CoreRpcComponentSchema<"pox-info.schema">;
export type Sortitions = CoreRpcComponentSchema<"sortitions.schema">;
export type Sortition = CoreRpcComponentSchema<"sortition.schema">;
export type GetHealth = CoreRpcComponentSchema<"get-health.schema">;
export type AccountData = CoreRpcComponentSchema<"account-data.schema">;
export type TransactionSubmissionError =
  CoreRpcComponentSchema<"transaction-submission-error.schema">;
export type FeeTransactionRequest =
  CoreRpcComponentSchema<"fee-transaction-request.schema">;
export type ExecutionCost = CoreRpcComponentSchema<"execution-cost.schema">;
export type FeeTransactionResponse =
  CoreRpcComponentSchema<"fee-transaction-response.schema">;
export type FeeTransactionError =
  CoreRpcComponentSchema<"fee-transaction-error.schema">;
export type ContractInterface =
  CoreRpcComponentSchema<"contract-interface.schema">;
export type ClarityType = CoreRpcComponentSchema<"clarity-type.schema">;
export type ContractSource = CoreRpcComponentSchema<"contract-source.schema">;
export type ReadOnlyFunctionArgs =
  CoreRpcComponentSchema<"read-only-function-args.schema">;
export type ReadOnlyFunctionResult =
  CoreRpcComponentSchema<"read-only-function-result.schema">;
export type ClarityName = CoreRpcComponentSchema<"clarity-name.schema">;
export type ClarityMetadata = CoreRpcComponentSchema<"clarity-metadata.schema">;
export type ConstantValue = CoreRpcComponentSchema<"constant-value.schema">;
export type IsTraitImplemented =
  CoreRpcComponentSchema<"is-trait-implemented.schema">;
export type SignerBlocksSigned =
  CoreRpcComponentSchema<"signer-blocks-signed.schema">;
export type UnconfirmedTransaction =
  CoreRpcComponentSchema<"unconfirmed-transaction.schema">;
export type BlockUploadResponse =
  CoreRpcComponentSchema<"block-upload-response.schema">;
export type AttachmentInventory =
  CoreRpcComponentSchema<"attachment-inventory.schema">;
export type AttachmentData = CoreRpcComponentSchema<"attachment-data.schema">;
export type StackerDbMetadata =
  CoreRpcComponentSchema<"stackerdb-metadata.schema">;
export type StackerDbReplicas =
  CoreRpcComponentSchema<"stackerdb-replicas.schema">;
export type StackerDbChunkData =
  CoreRpcComponentSchema<"stackerdb-chunk-data.schema">;
export type StackerDbChunkAckData =
  CoreRpcComponentSchema<"stackerdb-chunk-ack-data.schema">;
export type ClarityData = CoreRpcComponentSchema<"clarity-data.schema">;
export type BlockHeaders = CoreRpcComponentSchema<"block-headers.schema">;
export type BlockProposalResponse =
  CoreRpcComponentSchema<"block-proposal.schema">;
export type NetworkPeers = CoreRpcComponentSchema<"network-peers.schema">;
export type RPCNeighbor = CoreRpcComponentSchema<"rpc-neighbor.schema">;
export type TransactionInfo = CoreRpcComponentSchema<"get-transaction.schema">;
export type TenureForkInfo = CoreRpcComponentSchema<"tenure-fork-info.schema">;
export type TenureInfo = CoreRpcComponentSchema<"tenure-info.schema">;
export type TenureTip = CoreRpcComponentSchema<"tenure-tip.schema">;
export type TenureTipMetadata =
  CoreRpcComponentSchema<"tenure-tip-metadata.schema">;
export type GetStackerSet = CoreRpcComponentSchema<"get-stacker-set.schema">;
export type TenureBlocks = CoreRpcComponentSchema<"tenure-blocks.schema">;
export type BlockReplay = CoreRpcComponentSchema<"block-replay.schema">;
export type BlockReplayTransaction =
  CoreRpcComponentSchema<"block-replay-transaction.schema">;
export type BlockReplayTransactionEvent =
  CoreRpcComponentSchema<"block-replay-transaction-event.schema">;
export type BlockReplayTransactionStxTransferEvent =
  CoreRpcComponentSchema<"block-replay-transaction-stx-transfer-event.schema">;
export type BlockReplayTransactionStxBurnEvent =
  CoreRpcComponentSchema<"block-replay-transaction-stx-burn-event.schema">;
export type BlockReplayTransactionStxLockEvent =
  CoreRpcComponentSchema<"block-replay-transaction-stx-lock-event.schema">;
export type BlockReplayTransactionStxMintEvent =
  CoreRpcComponentSchema<"block-replay-transaction-stx-mint-event.schema">;
export type BlockReplayTransactionStxEvent =
  | BlockReplayTransactionStxTransferEvent
  | BlockReplayTransactionStxBurnEvent
  | BlockReplayTransactionStxLockEvent
  | BlockReplayTransactionStxMintEvent;
export type BlockReplayTransactionFtMintEvent =
  CoreRpcComponentSchema<"block-replay-transaction-ft-mint-event.schema">;
export type BlockReplayTransactionFtTransferEvent =
  CoreRpcComponentSchema<"block-replay-transaction-ft-transfer-event.schema">;
export type BlockReplayTransactionFtBurnEvent =
  CoreRpcComponentSchema<"block-replay-transaction-ft-burn-event.schema">;
export type BlockReplayTransactionFtEvent =
  | BlockReplayTransactionFtMintEvent
  | BlockReplayTransactionFtTransferEvent
  | BlockReplayTransactionFtBurnEvent;
export type BlockReplayTransactionNftMintEvent =
  CoreRpcComponentSchema<"block-replay-transaction-nft-mint-event.schema">;
export type BlockReplayTransactionNftTransferEvent =
  CoreRpcComponentSchema<"block-replay-transaction-nft-transfer-event.schema">;
export type BlockReplayTransactionNftBurnEvent =
  CoreRpcComponentSchema<"block-replay-transaction-nft-burn-event.schema">;
export type BlockReplayTransactionNftEvent =
  | BlockReplayTransactionNftMintEvent
  | BlockReplayTransactionNftTransferEvent
  | BlockReplayTransactionNftBurnEvent;
export type BlockReplayTransactionContractEvent =
  CoreRpcComponentSchema<"block-replay-transaction-contract-event.schema">;
