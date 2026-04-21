/**
 * Error thrown by the Core RPC client when a request fails.
 */
export class CoreRpcError extends Error {
  /** The HTTP status code of the response. */
  readonly status: number;
  /** The URL of the response. */
  readonly url: string;
  /** The HTTP method of the request. */
  readonly method: string;
  /** The details of the error. */
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
