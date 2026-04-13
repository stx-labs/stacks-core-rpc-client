import test from "node:test";
import assert from "node:assert/strict";
import { CoreRpcError, createCoreRpcClient } from "../src/index.js";

test("adds auth header only for authenticated endpoints", async () => {
  const requests: Request[] = [];
  const fetchMock: typeof globalThis.fetch = async (input, init) => {
    const request = input instanceof Request ? input : new Request(input, init);
    requests.push(request);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  const client = createCoreRpcClient({
    baseUrl: "http://localhost:20443",
    authToken: "secret-token",
    fetch: fetchMock,
  });

  await client.request("POST", "/v3/block_proposal", { body: {} });
  await client.request("GET", "/v2/info");

  assert.equal(requests[0]?.headers.get("authorization"), "secret-token");
  assert.equal(requests[1]?.headers.get("authorization"), null);
});

test("throws CoreRpcError with parsed details on HTTP error", async () => {
  const fetchMock: typeof globalThis.fetch = async () =>
    new Response("Unauthorized", {
      status: 401,
      headers: { "content-type": "text/plain" },
    });

  const client = createCoreRpcClient({
    baseUrl: "http://localhost:20443",
    authToken: "wrong-token",
    fetch: fetchMock,
  });

  await assert.rejects(
    async () => client.request("POST", "/v3/block_proposal", { body: {} }),
    (error: unknown) => {
      const typed = error as CoreRpcError & { details?: { error?: string } };
      assert.equal(typed.name, "CoreRpcError");
      assert.equal(typed.status, 401);
      assert.equal(typed.details?.error, "Unauthorized");
      return true;
    },
  );
});
