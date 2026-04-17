import type {
  Client,
  ClientPathsWithMethod,
  MethodResponse,
} from "openapi-fetch";
import type { components, paths } from "./generated/schema.js";

export type CoreRpcComponentSchemas = components["schemas"];
export type CoreRpcComponentSchemaName = keyof CoreRpcComponentSchemas;
export type CoreRpcComponentSchema<TName extends CoreRpcComponentSchemaName> =
  CoreRpcComponentSchemas[TName];

export type CoreRpcRawClient = Client<paths, `${string}/${string}`>;
export type CoreRpcMethod = "GET" | "POST" | "PUT" | "DELETE";
export type ToHttpMethod<TMethod extends CoreRpcMethod> = TMethod extends "GET"
  ? "get"
  : TMethod extends "POST"
    ? "post"
    : TMethod extends "PUT"
      ? "put"
      : "delete";
export type CoreRpcPath<TMethod extends CoreRpcMethod> = ClientPathsWithMethod<
  CoreRpcRawClient,
  ToHttpMethod<TMethod>
>;
export type CoreRpcResponse<
  TMethod extends CoreRpcMethod,
  TPath extends CoreRpcPath<TMethod>,
  TOptions = unknown,
> = MethodResponse<CoreRpcRawClient, ToHttpMethod<TMethod>, TPath, TOptions>;
export type CoreRpcClient = {
  raw: CoreRpcRawClient;
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
