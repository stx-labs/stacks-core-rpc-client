/* eslint-disable */
// This file is generated. Do not edit by hand.
// Source: https://raw.githubusercontent.com/stacks-network/stacks-core/d7f37b5388b490427d6705e17a9b016aee8fccb0/docs/rpc/openapi.yaml

export interface paths {
    "/v2/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Broadcast raw transaction
         * @description Broadcast raw transactions on the network. You can use the [@stacks/transactions](https://github.com/blockstack/stacks.js)
         *     project to generate a raw transaction payload.
         *
         *     The node performs static validation checks on transactions before accepting them into the mempool, including:
         *     - Transaction format validation
         *     - Signature verification
         *     - Nonce checking
         *     - Fee validation
         *     - Size limits
         */
        post: operations["broadcastTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/contracts/interface/{deployer_address}/{contract_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get contract interface
         * @description Get contract interface using a `deployer_address` and `contract name`
         */
        get: operations["getContractInterface"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/map_entry/{deployer_address}/{contract_name}/{map_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get specific data-map inside a contract
         * @description Attempt to fetch data from a contract data map. The contract is
         *     identified with [Stacks Address] and [Contract Name] in the URL path.
         *     The map is identified with [Map Name].
         *
         *     The key to lookup in the map is supplied via the POST body. This should
         *     be supplied as the hex string serialization of the key (which should be
         *     a Clarity value). Note, this is a JSON string.
         *
         *     The response is a JSON object with the following properties:
         *     - `data`: The hex serialization of the map response. Note that map
         *       responses are Clarity option types, for non-existent values, this is
         *       a serialized none, and for all other responses, it is a serialized
         *       (some ...) object.
         *     - `proof`: The hex serialization of the Merkle proof for the data.
         */
        post: operations["getContractDataMapEntry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/contracts/source/{deployer_address}/{contract_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get contract source
         * @description Returns the Clarity source code of a given contract, along with the
         *     block height it was published in, and the MARF proof for the data.
         */
        get: operations["getContractSource"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/contracts/call-read/{deployer_address}/{contract_name}/{function_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Call read-only function
         * @description Call a read-only public function on a given contract.
         *
         *     The contract is identified with [Stacks Address] and [Contract Name] in the URL path.
         *     The function is identified with [Function Name].
         *
         *     The arguments to the function are supplied via the POST body.
         *     This should be a JSON object with two main properties:
         *     - `sender` which should be a Stacks address or contract principal
         *     - `arguments` which should be an array of hex-encoded Clarity values.
         */
        post: operations["callReadOnlyFunction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/contracts/fast-call-read/{deployer_address}/{contract_name}/{function_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Call read-only function in fast mode (no cost and memory tracking)
         * @description Call a read-only public function on a given smart contract without cost tracking.
         *
         *     The contract is identified with [Stacks Address] and [Contract Name] in the URL path.
         *     The function is identified with [Function Name].
         *
         *     The arguments to the function are supplied via the POST body.
         *     This should be a JSON object with two main properties:
         *     - `sender` which should be a Stacks address or contract principal
         *     - `arguments` which should be an array of hex-encoded Clarity values.
         *
         *     **This API endpoint requires a basic Authorization header.**
         */
        post: operations["fastCallReadOnlyFunction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/accounts/{principal}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get account info
         * @description Get the account data for the provided principal
         *
         *     Where balance is the hex encoding of a unsigned 128-bit integer (big-endian), nonce is a unsigned 64-bit integer, and the proofs are provided as hex strings.
         *
         *     For non-existent accounts, this does not 404, rather it returns an object with balance and nonce of 0.
         */
        get: operations["getAccountInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/fees/transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get approximate fees for the given transaction
         * @description Get an estimated fee for the supplied transaction.  This
         *     estimates the execution cost of the transaction, the current
         *     fee rate of the network, and returns estimates for fee
         *     amounts.
         *
         *     * `transaction_payload` is a hex-encoded serialization of
         *       the TransactionPayload for the transaction.
         *     * `estimated_len` is an optional argument that provides the
         *       endpoint with an estimation of the final length (in bytes)
         *       of the transaction, including any post-conditions and
         *       signatures
         *
         *     If the node cannot provide an estimate for the transaction
         *     (e.g., if the node has never seen a contract-call for the
         *     given contract and function) or if estimation is not
         *     configured on this node, a 400 response is returned.
         *     The 400 response will be a JSON error containing a `reason`
         *     field which can be one of the following:
         *
         *     * `DatabaseError` - this Stacks node has had an internal
         *       database error while trying to estimate the costs of the
         *       supplied transaction.
         *     * `NoEstimateAvailable` - this Stacks node has not seen this
         *       kind of contract-call before, and it cannot provide an
         *       estimate yet.
         *     * `CostEstimationDisabled` - this Stacks node does not perform
         *       fee or cost estimation, and it cannot respond on this
         *       endpoint.
         *
         *     The 200 response contains the following data:
         *
         *     * `estimated_cost` - the estimated multi-dimensional cost of
         *       executing the Clarity VM on the provided transaction.
         *     * `estimated_cost_scalar` - a unitless integer that the Stacks
         *       node uses to compare how much of the block limit is consumed
         *       by different transactions. This value incorporates the
         *       estimated length of the transaction and the estimated
         *       execution cost of the transaction. The range of this integer
         *       may vary between different Stacks nodes. In order to compute
         *       an estimate of total fee amount for the transaction, this
         *       value is multiplied by the same Stacks node"s estimated fee
         *       rate.
         *     * `cost_scalar_change_by_byte` - a float value that indicates how
         *       much the `estimated_cost_scalar` value would increase for every
         *       additional byte in the final transaction.
         *     * `estimations` - an array of estimated fee rates and total fees to
         *       pay in microSTX for the transaction. This array provides a range of
         *       estimates (default: 3) that may be used. Each element of the array
         *       contains the following fields:
         *         * `fee_rate` - the estimated value for the current fee
         *           rates in the network
         *         * `fee` - the estimated value for the total fee in
         *           microSTX that the given transaction should pay. These
         *           values are the result of computing:
         *           `fee_rate` x `estimated_cost_scalar`.
         *           If the estimated fees are less than the minimum relay
         *           fee `(1 ustx x estimated_len)`, then that minimum relay
         *           fee will be returned here instead.
         *
         *
         *     Note: If the final transaction"s byte size is larger than
         *     supplied to `estimated_len`, then applications should increase
         *     this fee amount by:
         *
         *       `fee_rate` x `cost_scalar_change_by_byte` x (`final_size` - `estimated_size`)
         */
        post: operations["getFeeTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/fees/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get estimated fee
         * @description Get an estimated fee rate for STX transfer transactions. This is a fee
         *     rate per byte, returned as a JSON integer (microSTX per byte).
         */
        get: operations["getFeeTransfer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Core API info
         * @description Get Core API information
         */
        get: operations["getNodeInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/pox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get PoX details
         * @description Get Proof of Transfer (PoX) information. Can be used for Stacking.
         */
        get: operations["getPoxInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/traits/{deployer_address}/{contract_name}/{trait_deployer_address}/{trait_contract_name}/{trait_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get trait implementation details
         * @description Determine whether or not a specified trait is implemented (either
         *     explicitly or implicitly) within a given contract.
         */
        get: operations["checkTraitImplementation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/clarity/marf/{marf_key_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the MARF value for a given key
         * @description Attempt to fetch the value of a MARF key. The key is a 64-character
         *     hex string representing the MARF node hash.
         */
        get: operations["getClarityMarfValue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/clarity/metadata/{deployer_address}/{contract_name}/{clarity_metadata_key}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the contract metadata for the metadata key
         * @description Attempt to fetch the metadata of a contract. The contract is identified
         *     with [Contract Address] and [Contract Name] in the URL path. The metadata
         *     key is identified with [Clarity Metadata Key].
         *
         *     In the response, `data` is formatted as JSON.
         */
        get: operations["getClarityMetadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/constant_val/{deployer_address}/{contract_name}/{constant_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the value of a constant inside a contract
         * @description Attempt to fetch the value of a constant inside a contract. The contract
         *     is identified with [Stacks Address] and [Contract Name] in the URL path.
         *     The constant is identified with [Constant Name].
         *
         *     In the response, `data` is the hex serialization of the constant value.
         */
        get: operations["getConstantValue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/block_proposal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Validate a proposed Stacks block
         * @description Used by stackers to validate a proposed Stacks block from a miner.
         *     **This API endpoint requires a basic Authorization header.**
         */
        post: operations["postBlockProposal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/stacker_set/{cycle_number}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch the stacker and signer set information for a given cycle.
         * @description Used to get stacker and signer set information for a given cycle.
         *
         *     This will only return information for cycles started in Epoch-2.5
         *     where PoX-4 was active and subsequent cycles.
         */
        get: operations["getStackerSet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/blocks/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Nakamoto block by ID
         * @description Get a specific Nakamoto block (Stacks 3.x+) by its index block hash. This endpoint streams
         *     the block data from the Nakamoto staging blocks database where Nakamoto blocks are stored
         *     with additional metadata including tenure information.
         *
         *     **Compatibility**: Works with Nakamoto blocks only. For Stacks 2.x blocks, use `/v2/blocks/{block_id}`.
         */
        get: operations["getNakamotoBlockById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/blocks/height/{block_height}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a Nakamoto block by its height and optional tip
         * @description Fetch a Nakamoto block by its height and optional tip.
         */
        get: operations["getNakamotoBlockByHeight"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch metadata about the ongoing Nakamoto tenure
         * @description Fetch metadata about the ongoing Nakamoto tenure. This information is
         *     sufficient to obtain and authenticate the highest complete tenure, as
         *     well as obtain new tenure blocks.
         */
        get: operations["getTenureInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch a sequence of Nakamoto blocks in a tenure
         * @description Fetch a sequence of Nakamoto blocks in a tenure. The blocks will be
         *     served in order from highest to lowest. The blocks will be encoded in
         *     their SIP-003 wire format, and concatenated together.
         */
        get: operations["getTenures"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/blocks/{consensus_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the list of Stacks blocks in a tenure
         * @description Get the list of blocks in a tenure. The blocks will be
         *     shown in order from highest to lowest.
         */
        get: operations["getTenureBlocks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/blocks/hash/{burnchain_block_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the list of Nakamoto Stacks blocks in a tenure given Bitcoin block hash
         * @description Get the list of Nakamoto blocks in a tenure given the Bitcoin block hash. The blocks will be
         *     shown in order from highest to lowest. This is only for Nakamoto blocks, Epoch2 ones will not be shown.
         */
        get: operations["getTenureBlocksByHash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/blocks/height/{burnchain_block_height}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the list of Nakamoto Stacks blocks in a tenure given Bitcoin block height
         * @description Get the list of Nakamoto blocks in a tenure given the Bitcoin block height. The blocks will be
         *     shown in order from highest to lowest. This is only for Nakamoto blocks, Epoch2 ones will not be shown.
         */
        get: operations["getTenureBlocksByHeight"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/sortitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get latest sortition information
         * @description Get sortition information about the latest burnchain block processed by this node.
         *     Returns a single-element array with the latest sortition.
         */
        get: operations["getLatestSortitions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/sortitions/latest_and_last": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get latest and last winning sortitions
         * @description Get sortition information about the latest burn block with a winning miner
         *     AND the previous such burn block. Returns an array with two sortition objects.
         */
        get: operations["getLatestAndLastWinningSortitions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/sortitions/consensus/{consensus_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get sortition by consensus hash
         * @description Get sortition information for a specific consensus hash.
         *     Returns a single-element array with the matching sortition.
         */
        get: operations["getSortitionByConsensusHash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/sortitions/burn/{burn_header_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get sortition by burn header hash
         * @description Get sortition information for a specific burn header hash.
         *     Returns a single-element array with the matching sortition.
         */
        get: operations["getSortitionByBurnHeaderHash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/sortitions/burn_height/{height}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get sortition by burn block height
         * @description Get sortition information for a specific burn block height.
         *     Returns a single-element array with the matching sortition.
         */
        get: operations["getSortitionByBurnBlockHeight"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/signer/{signer_pubkey}/{cycle_number}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get number of blocks signed by signer during a given reward cycle
         * @description Get number of blocks signed by signer during a given reward cycle
         */
        get: operations["getSignerBlocksSigned"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/transaction/{txid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve transaction details by TXID
         * @description Get a JSON with the transaction details including the `index_block_hash`,
         *     the hex-encoded transaction body, and the `result`.
         */
        get: operations["getTransactionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Query the health of the node.
         * @description Get node health information.
         *     A node is considered healthy if its Stacks tip height matches the maximum Stacks tip height observed among its connected peers.
         *     This endpoint returns:
         *     - `difference_from_max_peer`: The difference in Stacks height between this node and its most advanced peer.
         *     - `max_stacks_height_of_neighbors`: The maximum Stacks height observed among the node"s connected peers.
         *     - `node_stacks_tip_height`: The current Stacks tip height of this node.
         *     - `max_stacks_neighbor_address`: The address of the most advanced peer. Null if no peer data is available.
         */
        get: operations["getNodeHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/attachments/{hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get attachment by hash
         * @description Get an attachment by its hash. Attachments are content stored in the Atlas network.
         *
         *     The attachment hash is a 40-character hex string (SHA-1 hash).
         */
        get: operations["getAttachment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/attachments/inv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get attachment inventory
         * @description Get inventory of attachments for a given index block hash and page range.
         *     This returns a bitfield indicating which attachments are available.
         */
        get: operations["getAttachmentsInventory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/microblocks/confirmed/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stream of confirmed microblocks (Epoch 2.x)
         * @description Get microblocks that were confirmed by the given anchored block.
         *     The microblocks are returned as a binary stream of concatenated microblock data.
         */
        get: operations["getConfirmedMicroblocks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/microblocks/{microblock_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a stream of microblocks beginning
         *     with the given microblock (Epoch 2.x).
         */
        get: operations["getMicroblockById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/microblocks/unconfirmed/{block_id}/{seq}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stream of unconfirmed microblocks (Epoch 2.x)
         * @description Get unconfirmed microblocks starting from a specific sequence number.
         *     The microblocks are returned as a binary stream.
         */
        get: operations["getUnconfirmedMicroblocks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/microblocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a microblock (Epoch 2.x)
         * @description Submit a microblock to the node for validation and relay.
         *     The body **must** be the SIP-003 binary serialization of a `Microblock`
         *     and sent with `Content-Type: application/octet-stream`.
         */
        post: operations["postMicroblock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/stackerdb/{principal}/{contract_name}/{slot_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get StackerDB chunk (latest version)
         * @description Get the latest version of a chunk of data from a StackerDB instance.
         */
        get: operations["getStackerDbChunk"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/stackerdb/{principal}/{contract_name}/{slot_id}/{slot_version}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get StackerDB chunk (specific version)
         * @description Get a specific version of a chunk of data from a StackerDB instance.
         */
        get: operations["getStackerDbChunkVersioned"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/stackerdb/{principal}/{contract_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get StackerDB metadata
         * @description Get metadata about a StackerDB instance, including slot information.
         */
        get: operations["getStackerDbMetadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/stackerdb/{principal}/{contract_name}/chunks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Write StackerDB chunk
         * @description Write a chunk of data to a StackerDB instance.
         *
         *     The request body should contain a JSON object with the chunk data including
         *     slot_id, slot_version, signature, and hex-encoded data.
         *
         *     The response indicates whether the chunk was accepted, and if not, provides
         *     detailed error information. Note that failed writes return HTTP 200 with
         *     accepted: false, not HTTP error codes.
         */
        post: operations["postStackerDbChunk"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/stackerdb/{principal}/{contract_name}/replicas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List StackerDB replicas
         * @description Get a list of replicas for a StackerDB instance.
         */
        get: operations["listStackerDbReplicas"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/data_var/{principal}/{contract_name}/{var_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get contract data variable
         * @description Fetch a data variable from a smart contract.
         *     Returns the raw hex-encoded value of the variable.
         */
        get: operations["getContractDataVariable"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/headers/{quantity}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get recent 2.x block headers
         * @description **Deprecated**: This endpoint is deprecated since Nakamoto.**
         *     Stream (as a JSON array) up to `quantity` most recent anchored Stacks block headers.
         *     The result is ordered from the current tip backwards.
         */
        get: operations["getBlockHeaders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/blocks/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Stacks 2.x block by ID
         * @description Get a specific Stacks 2.x era block by its block ID. This endpoint streams the block data
         *     from the filesystem storage where traditional Stacks blocks are stored as individual files.
         *
         *     **Compatibility**: Works with all Stacks 2.x blocks. For Nakamoto blocks (Stacks 3.x+), use `/v3/blocks/{block_id}`.
         */
        get: operations["getLegacyBlockById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/neighbors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get neighbor peers
         * @description Get information about the node"s neighbor peers in the network.
         */
        get: operations["getNetworkPeers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/fork_info/{start}/{stop}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tenure fork information
         * @description Get information about tenure forking between two consensus hashes.
         *     This is used to identify conflicting tenures in the Nakamoto consensus.
         */
        get: operations["getTenureForkInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/tip/{consensus_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tenure tip
         * @description Get the tip block of a tenure identified by consensus hash.
         */
        get: operations["getTenureTip"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/tenures/tip_metadata/{consensus_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tenure tip with metadata
         * @description Get the tip block and associated metadata of a tenure identified by consensus hash.
         */
        get: operations["getTenureTipMetadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/transactions/unconfirmed/{txid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unconfirmed transaction
         * @description Get an unconfirmed transaction by its transaction ID.
         *     This looks in both the mempool and unconfirmed microblock stream.
         */
        get: operations["getUnconfirmedTransactionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/blocks/upload/{consensus_hash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a Stacks block
         * @description Upload a Stacks block to the node for processing.
         *     The block must be in binary format and associated with the given consensus hash.
         */
        post: operations["uploadLegacyBlock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/mempool/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Query mempool for missing transactions
         * @description Query the mempool for transactions that might be missing from the requesting node.
         *     This endpoint supports pagination and streaming of transaction data.
         */
        post: operations["queryMempool"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/blocks/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload a Nakamoto block
         * @description Upload a Nakamoto block to the node for processing.
         *
         *     - **Body** - must be the binary (SIP-003) serialization of a `NakamotoBlock`.
         *     - **Authentication** - only required when the query parameter `broadcast=1` is supplied.
         *       In that case the caller **must** include an `Authorization` header.
         */
        post: operations["uploadNakamotoBlock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/blocks/replay/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Replay mining of a block and returns its content
         * @description Replay the mining of a block (no data is written in the MARF) and returns its content.
         */
        get: operations["blockReplay"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v3/blocks/simulate/{block_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Simulate mining of a block with the specified transactions and returns its content
         * @description Simulate the mining of a block (no data is written in the MARF) with specified transactions and returns its content.
         */
        get: operations["blockSimulate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        NodeInfo: components["schemas"]["node-info.schema"];
        PoxInfo: components["schemas"]["pox-info.schema"];
        Sortitions: components["schemas"]["sortitions.schema"];
        GetHealth: components["schemas"]["get-health.schema"];
        AccountData: components["schemas"]["account-data.schema"];
        TransactionSubmissionError: components["schemas"]["transaction-submission-error.schema"];
        FeeTransactionRequest: components["schemas"]["fee-transaction-request.schema"];
        FeeTransactionResponse: components["schemas"]["fee-transaction-response.schema"];
        FeeTransactionError: components["schemas"]["fee-transaction-error.schema"];
        ContractInterface: components["schemas"]["contract-interface.schema"];
        ContractSource: components["schemas"]["contract-source.schema"];
        ReadOnlyFunctionArgs: components["schemas"]["read-only-function-args.schema"];
        ReadOnlyFunctionResult: components["schemas"]["read-only-function-result.schema"];
        ClarityName: components["schemas"]["clarity-name.schema"];
        ClarityMetadata: components["schemas"]["clarity-metadata.schema"];
        ConstantValue: components["schemas"]["constant-value.schema"];
        IsTraitImplemented: components["schemas"]["is-trait-implemented.schema"];
        SignerBlocksSigned: components["schemas"]["signer-blocks-signed.schema"];
        UnconfirmedTransaction: components["schemas"]["unconfirmed-transaction.schema"];
        BlockUploadResponse: components["schemas"]["block-upload-response.schema"];
        AttachmentInventory: components["schemas"]["attachment-inventory.schema"];
        AttachmentData: components["schemas"]["attachment-data.schema"];
        StackerDbMetadata: components["schemas"]["stackerdb-metadata.schema"];
        StackerDbReplicas: components["schemas"]["stackerdb-replicas.schema"];
        StackerDbChunkData: components["schemas"]["stackerdb-chunk-data.schema"];
        StackerDbChunkAckData: components["schemas"]["stackerdb-chunk-ack-data.schema"];
        ClarityData: components["schemas"]["clarity-data.schema"];
        BlockHeaders: components["schemas"]["block-headers.schema"];
        BlockProposalResponse: components["schemas"]["block-proposal.schema"];
        NetworkPeers: components["schemas"]["network-peers.schema"];
        TransactionInfo: components["schemas"]["get-transaction.schema"];
        TenureForkInfo: components["schemas"]["tenure-fork-info.schema"];
        TenureInfo: components["schemas"]["tenure-info.schema"];
        TenureTip: components["schemas"]["tenure-tip.schema"];
        TenureTipMetadata: components["schemas"]["tenure-tip-metadata.schema"];
        GetStackerSet: components["schemas"]["get-stacker-set.schema"];
        TenureBlocks: components["schemas"]["tenure-blocks.schema"];
        BlockReplay: components["schemas"]["block-replay.schema"];
        /** @description Describes a transaction submission error response */
        "transaction-submission-error.schema": {
            /** @description The error */
            error: string;
            /** @description The reason for the error */
            reason: string;
            /** @description More details about the reason */
            reason_data?: {
                actual?: number;
                expected?: number;
                is_origin?: boolean;
                principal?: string;
            };
            /** @description The relevant transaction id */
            txid: string;
        };
        /**
         * @example SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0
         * @example ST000000000000000000002AMW42H
         * @example SM2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKQVX8X0G
         * @example SN2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKP6D2ZK9
         */
        "standard-principal.schema": string;
        /** @description Represents a Clarity type. It can be a simple string for primitive types or a nested object for complex types like lists and tuples. */
        ClarityType: string | {
            list: {
                /** @description Type of list elements */
                type: components["schemas"]["ClarityType"];
                /** @description Fixed length for list types */
                length?: number;
            };
        } | {
            tuple: {
                /** @description Field name in the tuple */
                name: string;
                /** @description Type of the tuple field */
                type: components["schemas"]["ClarityType"];
            }[];
        } | {
            response: {
                /** @description Success type */
                ok: components["schemas"]["ClarityType"];
                /** @description Error type */
                error: components["schemas"]["ClarityType"];
            };
        } | {
            /** @description Wrapped optional type */
            optional: components["schemas"]["ClarityType"];
        } | {
            buffer: {
                /** @description Fixed length for buffer types */
                length: number;
            };
        } | {
            "string-ascii": {
                /** @description Maximum number of characters (ASCII) */
                length: number;
            };
        } | {
            "string-utf8": {
                /** @description Maximum number of code-points (UTF-8) */
                length: number;
            };
        };
        /** @description The interface of a Clarity smart contract. */
        "contract-interface.schema": {
            /** @description List of defined methods */
            functions: {
                name: string;
                /** @enum {string} */
                access: "public" | "private" | "read_only";
                args: {
                    name: string;
                    type: components["schemas"]["ClarityType"];
                }[];
                outputs: {
                    type: components["schemas"]["ClarityType"];
                };
            }[];
            /** @description List of defined constants */
            variables: {
                name: string;
                type: components["schemas"]["ClarityType"];
                /** @enum {string} */
                access: "constant" | "variable";
            }[];
            /** @description List of defined data-maps */
            maps: {
                name: string;
                key: components["schemas"]["ClarityType"];
                value: components["schemas"]["ClarityType"];
            }[];
            /** @description List of fungible tokens in the contract */
            fungible_tokens: {
                name: string;
            }[];
            /** @description List of non-fungible tokens in the contract */
            non_fungible_tokens: {
                name: string;
                type: components["schemas"]["ClarityType"];
            }[];
            /** @description Stacks epoch identifier (e.g., "Epoch30"). */
            epoch: string;
            /**
             * @description Clarity language version used by this contract.
             * @enum {string}
             */
            clarity_version: "Clarity1" | "Clarity2" | "Clarity3";
            $defs: {
                /** @description Represents a Clarity type. It can be a simple string for primitive types or a nested object for complex types like lists and tuples. */
                ClarityType: string | {
                    list: {
                        /** @description Type of list elements */
                        type: components["schemas"]["ClarityType"];
                        /** @description Fixed length for list types */
                        length?: number;
                    };
                } | {
                    tuple: {
                        /** @description Field name in the tuple */
                        name: string;
                        /** @description Type of the tuple field */
                        type: components["schemas"]["ClarityType"];
                    }[];
                } | {
                    response: {
                        /** @description Success type */
                        ok: components["schemas"]["ClarityType"];
                        /** @description Error type */
                        error: components["schemas"]["ClarityType"];
                    };
                } | {
                    /** @description Wrapped optional type */
                    optional: components["schemas"]["ClarityType"];
                } | {
                    buffer: {
                        /** @description Fixed length for buffer types */
                        length: number;
                    };
                } | {
                    "string-ascii": {
                        /** @description Maximum number of characters (ASCII) */
                        length: number;
                    };
                } | {
                    "string-utf8": {
                        /** @description Maximum number of code-points (UTF-8) */
                        length: number;
                    };
                };
            };
        };
        /**
         * @description A valid Clarity name. Must either:
         *     - Start with a letter and contain only letters, numbers, and [-_!?+<>=/*]
         *     - Be exactly one of the special characters: - + = * /
         *     - Be a comparison operator: < > <= >=
         */
        "clarity-name.schema": string;
        /** @description Response to a GET request for Clarity Data/MARF/MapEntry value */
        "clarity-data.schema": {
            /** @description Hex-encoded 0x prefixed string of the MARF value */
            data: string;
            /** @description Hex-encoded 0x prefixed string of the Merkle proof for the data. Empty string if proof not requested. */
            proof?: string;
        };
        /** @description GET request to get contract source */
        "contract-source.schema": {
            source: string;
            /** @description Block height at which the contract was published (32-bit unsigned integer) */
            publish_height: number;
            /** @description Hex-encoded 0x prefixed string of the Merkle proof for the contract source */
            proof?: string;
        };
        /**
         * @example SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0
         * @example SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0.get-info
         * @example ST000000000000000000002AMW42H
         * @example SM2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKQVX8X0G
         * @example SN2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKP6D2ZK9
         */
        "principal.schema": string;
        /** @description Arguments for a simulated read-only Clarity function call, including the sender/sponsor principals and hex-encoded Clarity values. */
        "read-only-function-args.schema": {
            /** @description The simulated tx-sender (standard address or contract principal). */
            sender: components["schemas"]["principal.schema"];
            /** @description The simulated sponsor address. */
            sponsor?: components["schemas"]["principal.schema"];
            /** @description An array of hex serialized Clarity values */
            arguments: string[];
        };
        /** @description The result of a read-only function call. */
        "read-only-function-result.schema": {
            /** @enum {boolean} */
            okay: true;
            /** @description Hex-encoded Clarity value of the successful result. */
            result: string;
        } | {
            /** @enum {boolean} */
            okay: false;
            /** @description A string representing the cause of the error. */
            cause: string;
        };
        /** @description GET request for account data */
        "account-data.schema": {
            balance: string;
            locked: string;
            /** @description Block height when locked balance unlocks (64-bit unsigned integer) */
            unlock_height: number;
            /** @description Account transaction nonce (64-bit unsigned integer) */
            nonce: number;
            /** @description Merkle proof for the balance value */
            balance_proof?: string;
            /** @description Merkle proof for the nonce value */
            nonce_proof?: string;
        };
        /** @description POST request for estimated fee */
        "fee-transaction-request.schema": {
            transaction_payload: string;
            estimated_len?: number;
        };
        /** @description POST response for estimated fee */
        "fee-transaction-response.schema": {
            estimated_cost: {
                read_count: number;
                read_length: number;
                runtime: number;
                write_count: number;
                write_length: number;
            };
            estimated_cost_scalar: number;
            cost_scalar_change_by_byte: number;
            estimations: {
                fee_rate?: number;
                fee?: number;
            }[];
        };
        /** @description Returned when the node cannot calculate a fee estimate. */
        "fee-transaction-error.schema": {
            /**
             * @description Human-readable summary of the failure.
             * @example Estimation could not be performed
             */
            error: string;
            /**
             * @description Machine-readable error code.
             * @enum {string}
             */
            reason: "DatabaseError" | "NoEstimateAvailable";
            /**
             * @description Optional structured details specific to `reason`.
             *     For the current implementation it contains a `message` field,
             *     but additional fields may be added in future.
             */
            reason_data?: ({
                /** @example SQLite error: table fees does not exist */
                message?: string;
            } & {
                [key: string]: unknown;
            }) | null;
        };
        /** @description GET request for core node information */
        "node-info.schema": {
            /**
             * @description Identifies the version number for the networking communication. This
             *     should not change while a node is running, and will only change if there's an
             *     upgrade.
             */
            peer_version: number;
            /**
             * @description A hash used to identify the burnchain view for a node. It incorporates
             *     bitcoin chain information and PoX information. Nodes that disagree on this value
             *     will appear to each other as forks. This value changes after every block.
             */
            pox_consensus: string;
            /** @description Latest bitcoin chain height. */
            burn_block_height: number;
            /** @description Same as pox_consensus, but evaluated at stable_burn_block_height. */
            stable_pox_consensus: string;
            /**
             * @description The bitcoin block height at which the last PoX anchor block was seen.
             *     Leftover from stacks 1.0, basically always burn_block_height - 1.
             */
            stable_burn_block_height: number;
            /** @description A version descriptor for the node. */
            server_version: string;
            /** @description Identifies the network (e.g., mainnet, testnet). */
            network_id: number;
            /** @description same as network_id, but for bitcoin */
            parent_network_id: number;
            /** @description The latest Stacks chain height. */
            stacks_tip_height: number;
            /** @description The best known block hash for the Stacks chain. */
            stacks_tip: string;
            /** @description The bitcoin consensus hash at the time that stacks_tip was mined. */
            stacks_tip_consensus_hash: string;
            /** @description The SHA256 hash of the genesis chainstate. */
            genesis_chainstate_hash: string;
            /**
             * @description The latest microblock hash if any microblocks were processed. If no
             *     microblock has been processed for the current block, a 000.., hex array is
             *     returned.
             */
            unanchored_tip?: string | null;
            /** @description The sequence number of the latest microblock if any microblocks were processed. */
            unanchored_seq?: number | null;
            /** @description The latest Stacks tenure height. */
            tenure_height: number;
            /**
             * @description The block height at which a testnet network will be reset.
             *     Not applicable to mainnet.
             */
            exit_at_block_height?: number | null;
            /** @description Indicates whether the node has fully synchronized with the network. */
            is_fully_synced: boolean;
            /** @description The node's public key. */
            node_public_key?: string | null;
            /** @description The HASH160 of the node's public key. */
            node_public_key_hash?: string | null;
            last_pox_anchor?: {
                anchor_block_hash?: string;
                anchor_block_txid?: string;
            } | null;
            stackerdbs?: string[] | null;
        };
        /** @description Get Proof of Transfer (PoX) information */
        "pox-info.schema": {
            /** @description The contract identifier for the PoX contract */
            contract_id: string;
            /** @description The first burn block evaluated in this Stacks chain */
            first_burnchain_block_height: number;
            /** @description The latest Bitcoin chain block height */
            current_burnchain_block_height: number;
            /** @description The ID of the Stacks Epoch that the node is currently in. */
            current_epoch: string;
            /** @description The threshold of stacking participation that must be reached for PoX to activate in any cycle */
            pox_activation_threshold_ustx: number;
            /** @description The fraction of liquid STX that must vote to reject PoX in order to prevent the next reward cycle from activating. */
            rejection_fraction?: number | null;
            /** @description The length in burn blocks of the reward phase */
            reward_phase_block_length: number;
            /** @description The length in burn blocks of the prepare phase */
            prepare_phase_block_length: number;
            /** @description The number of reward slots in a reward cycle */
            reward_slots: number;
            /** @description The current total amount of liquid microstacks. */
            total_liquid_supply_ustx: number;
            /** @description The length in burn blocks of a whole PoX cycle (reward phase and prepare phase) */
            reward_cycle_length: number;
            current_cycle: {
                /** @description The reward cycle number */
                id: number;
                /** @description The threshold amount for obtaining a slot in this reward cycle. */
                min_threshold_ustx: number;
                /** @description The total amount of stacked microstacks in this reward cycle. */
                stacked_ustx: number;
                /** @description Whether or not PoX is active during this reward cycle. */
                is_pox_active: boolean;
            };
            next_cycle: {
                /** @description The reward cycle number */
                id: number;
                /** @description The threshold amount for obtaining a slot in this reward cycle. */
                min_threshold_ustx: number;
                /** @description The total amount of stacked microstacks in this reward cycle. */
                stacked_ustx: number;
                /** @description The minimum amount that can be used to submit a `stack-stx` call. */
                min_increment_ustx: number;
                /** @description The burn block height when the prepare phase for this cycle begins. Any eligible stacks must be stacked before this block. */
                prepare_phase_start_block_height: number;
                /** @description The number of burn blocks until the prepare phase for this cycle starts. If the prepare phase for this cycle already started, this value will be a negative number. */
                blocks_until_prepare_phase: number;
                /** @description The burn block height when the reward phase for this cycle begins. Any eligible stacks must be stacked before this block. */
                reward_phase_start_block_height: number;
                /** @description The number of burn blocks until this reward phase starts. */
                blocks_until_reward_phase: number;
                /** @description The remaining amount of liquid STX that must vote to reject the next reward cycle to prevent the next reward cycle from activating. */
                ustx_until_pox_rejection?: number | null;
            };
            /**
             * @deprecated
             * @description The active reward cycle number
             */
            reward_cycle_id?: number;
            /** @deprecated */
            min_amount_ustx?: number;
            /** @deprecated */
            prepare_cycle_length?: number;
            /** @deprecated */
            rejection_votes_left_required?: number | null;
            /**
             * @deprecated
             * @description The number of blocks until the next reward cycle.
             */
            next_reward_cycle_in?: number;
            /** @description Versions of each PoX */
            contract_versions: {
                /** @description The contract identifier for the PoX contract */
                contract_id: string;
                /** @description The burn block height at which this version of PoX is activated */
                activation_burnchain_block_height: number;
                /** @description The first reward cycle number that uses this version of PoX */
                first_reward_cycle_id: number;
            }[];
            /** @description Epochs */
            epochs: {
                epoch_id: string;
                start_height: number;
                end_height: number;
                block_limit: {
                    read_count: number;
                    read_length: number;
                    write_count: number;
                    write_length: number;
                    runtime: number;
                };
                network_epoch: number;
            }[];
        };
        /** @description GET request to get trait implementation information */
        "is-trait-implemented.schema": {
            is_implemented: boolean;
        };
        /** @description Response of get clarity metadata request */
        "clarity-metadata.schema": {
            /** @description Metadata value */
            data: string;
        };
        /** @description Response of get constant val request */
        "constant-value.schema": {
            /** @description Hex-encoded 0x prefixed string of clarity value. */
            data: string;
        };
        /** @description Get Response for Block Proposal */
        "block-proposal.schema": {
            /** @enum {string} */
            result: "Error" | "Accepted";
            /** @description A message describing the result or error message. */
            message: string;
        };
        "get-stacker-set.schema": {
            stacker_set?: {
                /** @description Reward addresses that will receive PoX rewards for the cycle. */
                rewarded_addresses: ({
                    /** @description Standard address representation. */
                    Standard?: ({
                        /** @description Hex-encoded 20-byte address payload */
                        bytes?: string;
                        /** @description Address version byte */
                        version?: number;
                    } | string)[];
                } & {
                    [key: string]: unknown;
                })[];
                /** @description Optional signer set for PoX-4 reward cycles. */
                signers?: {
                    /** @description Hex-encoded compressed Secp256k1 public key (33 bytes) */
                    signing_key?: string;
                    /** @description Signer voting weight (number of slots) */
                    weight?: number;
                    /**
                     * Format: int64
                     * @description Amount stacked by signer (in microSTX)
                     */
                    stacked_amt?: number;
                }[];
                start_cycle_state: {
                    /** @description Principals that missed reward slots at cycle start. */
                    missed_reward_slots?: Record<string, never>[];
                };
                /**
                 * Format: int64
                 * @description Minimum STX amount required to qualify for stacking (optional)
                 */
                pox_ustx_threshold?: number;
            };
        };
        "tenure-info.schema": {
            /** @description Consensus hash of the tenure */
            consensus_hash?: string;
            /** @description Block ID where the tenure started */
            tenure_start_block_id?: string;
            /** @description Parent consensus hash */
            parent_consensus_hash?: string;
            /** @description Parent tenure start block ID */
            parent_tenure_start_block_id?: string;
            /** @description Current tip block ID */
            tip_block_id?: string;
            /** @description Current tip height */
            tip_height?: number;
            /** @description Current reward cycle */
            reward_cycle?: number;
        };
        "tenure-blocks.schema": {
            /** @description Consensus hash of the tenure */
            consensus_hash?: string;
            /**
             * Format: uint64
             * @description Height of the Bitcoin block
             */
            burn_block_height?: number;
            /** @description Hash of the Bitcoin block */
            burn_block_hash?: string;
            stacks_blocks?: {
                /** @description Block ID (index block hash) */
                block_id?: string;
                /** @description Hash of the block */
                block_hash?: string;
                /** @description Type of block (currently "epoch2" or "nakamoto") */
                header_type?: string;
                /**
                 * Format: uint64
                 * @description Height of the block
                 */
                height?: number;
                /** @description Block ID (index block hash) of the parent */
                parent_block_id?: string;
            }[];
        };
        /** @description Information about a burnchain sortition event */
        Sortition: {
            /** @description The burnchain header hash of the block that triggered this event */
            burn_block_hash: string;
            /** @description The burn height of the block that triggered this event */
            burn_block_height: number;
            /** @description The burn block time of the sortition (Unix timestamp) */
            burn_header_timestamp: number;
            /** @description This sortition ID of the block that triggered this event. This incorporates PoX forking information and the burn block hash to obtain an identifier that is unique across PoX forks and burnchain forks. */
            sortition_id: string;
            /** @description The parent of this burn block's Sortition ID */
            parent_sortition_id: string;
            /** @description The consensus hash of the block that triggered this event. This incorporates PoX forking information and burn op information to obtain an identifier that is unique across PoX forks and burnchain forks. */
            consensus_hash: string;
            /** @description Boolean indicating whether or not there was a successful sortition (i.e. a winning block or miner was chosen). This will also be true if this sortition corresponds to a shadow block. */
            was_sortition: boolean;
            /** @description If sortition occurred, and the miner's VRF key registration associated a nakamoto mining pubkey with their commit, this will contain the Hash160 of that mining key. */
            miner_pk_hash160?: string | null;
            /** @description If sortition occurred, this will be the consensus hash of the burn block corresponding to the winning block commit's parent block ptr. In 3.x, this is the consensus hash of the tenure that this new burn block's miner will be building off of. */
            stacks_parent_ch?: string | null;
            /** @description If sortition occurred, this will be the consensus hash of the most recent sortition before this one. */
            last_sortition_ch?: string | null;
            /** @description In Stacks 2.x, this is the winning block. In Stacks 3.x, this is the first block of the parent tenure. */
            committed_block_hash?: string | null;
            /** @description This is the VRF seed generated by this sortition */
            vrf_seed?: string | null;
        };
        /** @description Array of sortition information objects from the burnchain */
        "sortitions.schema": components["schemas"]["Sortition"][];
        "signer-blocks-signed.schema": {
            /** @description Number of blocks signed by this signer */
            blocks_signed: number;
        };
        "get-transaction.schema": {
            /** @description Block hash where the transaction was included */
            index_block_hash: string;
            /** @description Hex-encoded transaction */
            tx: string;
            /** @description Transaction execution result (Clarity value) */
            result: string;
            /** @description Height of the block where the transaction was included */
            block_height?: number | null;
            /** @description Whether the block where this transaction was included is in the canonical chain tip */
            is_canonical?: boolean;
        };
        /** @description Health information about the node's synchronization status */
        "get-health.schema": {
            /** @description The difference in Stacks height between this node and its most advanced peer */
            difference_from_max_peer: number;
            /** @description The maximum Stacks height observed among the node's connected peers */
            max_stacks_height_of_neighbors: number;
            /** @description The current Stacks tip height of this node */
            node_stacks_tip_height: number;
            /** @description The address of the most advanced peer */
            max_stacks_neighbor_address?: string | null;
        };
        "attachment-data.schema": {
            /**
             * Format: byte
             * @description The attachment data, hex-encoded.
             */
            attachment: string;
        };
        "attachment-inventory.schema": {
            /** @description Index block hash */
            block_id?: string;
            pages?: {
                /** @description Page index */
                index?: number;
                /** @description 8-byte bitfield for the page (array of integers 0-255) */
                inventory?: number[];
            }[];
        };
        "stackerdb-metadata.schema": {
            /** @description Slot identifier (unique for each DB instance) */
            slot_id?: number;
            /** @description Slot version (a lamport clock) */
            slot_version?: number;
            /** @description Data hash (hex, no 0x prefix) */
            data_hash?: string;
            /** @description signature over the above (hex, no 0x prefix) */
            signature?: string;
        }[];
        "stackerdb-chunk-data.schema": {
            /** @description Slot identifier (u32 range) */
            slot_id: number;
            /** @description Slot version (lamport clock, u32 range) */
            slot_version: number;
            /** @description Hex-encoded signature from the stacker */
            sig: string;
            /** @description Hex-encoded chunk data (must be even length) */
            data: string;
        };
        "stackerdb-chunk-ack-data.schema": {
            /** @description Whether the chunk was accepted */
            accepted: boolean;
            /** @description JSON-encoded reason for rejection (only present when accepted is false) */
            reason?: string | null;
            /** @description Slot metadata (present on successful acceptance) */
            metadata?: {
                /** @description Slot identifier */
                slot_id?: number;
                /** @description Slot version */
                slot_version?: number;
                /** @description Hex-encoded SHA512/256 hash of the data */
                data_hash?: string;
                /** @description Hex-encoded signature */
                signature?: string;
            } | null;
            /** @description Error code (only present when accepted is false) */
            code?: number | null;
        };
        "stackerdb-replicas.schema": {
            ip?: string;
            port?: number;
            /** @description 20-byte public key hash */
            public_key_hash?: string;
        }[];
        /** @description JSON array returned by /v2/headers/{quantity}. Each entry is an ExtendedStacksHeader. */
        "block-headers.schema": {
            /** @description 20-byte burn-chain consensus hash (hex, no 0x prefix) */
            consensus_hash: string;
            /** @description Hex-encoded SIP-003 serialization of the Stacks block header */
            header: string;
            /** @description 32-byte index-block ID of the parent Stacks block (hex) */
            parent_block_id: string;
        }[];
        /** @description A peer in the network */
        RPCNeighbor: {
            /** @description The network ID of the peer. */
            network_id: number;
            /** @description The peer version. */
            peer_version: number;
            /**
             * Format: ip
             * @description The IP address of the peer.
             */
            ip: string;
            /** @description The port number of the peer. */
            port: number;
            /** @description The HASH160 of the peer's public key. */
            public_key_hash: string;
            /** @description Whether the peer connection is authenticated. */
            authenticated: boolean;
            /** @description List of StackerDBs the peer supports, represented as qualified contract identifiers. */
            stackerdbs?: string[] | null;
            /**
             * Format: int64
             * @description The age of the peer connection in seconds.
             */
            age?: number | null;
        };
        /** @description Information about the node's neighbor peers in the network. */
        "network-peers.schema": {
            /** @description List of bootstrap peers known to the node. */
            bootstrap: components["schemas"]["RPCNeighbor"][];
            /** @description List of a sample of gossiped peers. */
            sample: components["schemas"]["RPCNeighbor"][];
            /** @description List of inbound peer connections. */
            inbound: components["schemas"]["RPCNeighbor"][];
            /** @description List of outbound peer connections. */
            outbound: components["schemas"]["RPCNeighbor"][];
            $defs: {
                /** @description A peer in the network */
                RPCNeighbor: {
                    /** @description The network ID of the peer. */
                    network_id: number;
                    /** @description The peer version. */
                    peer_version: number;
                    /**
                     * Format: ip
                     * @description The IP address of the peer.
                     */
                    ip: string;
                    /** @description The port number of the peer. */
                    port: number;
                    /** @description The HASH160 of the peer's public key. */
                    public_key_hash: string;
                    /** @description Whether the peer connection is authenticated. */
                    authenticated: boolean;
                    /** @description List of StackerDBs the peer supports, represented as qualified contract identifiers. */
                    stackerdbs?: string[] | null;
                    /**
                     * Format: int64
                     * @description The age of the peer connection in seconds.
                     */
                    age?: number | null;
                };
            };
        };
        /** @description Information about a tenure used for fork-detection. */
        "tenure-fork-info.schema": {
            /** @description 0x-prefixed 32-byte Bitcoin block hash that triggered the tenure event */
            burn_block_hash: string;
            /** Format: uint64 */
            burn_block_height: number;
            /** @description 0x-prefixed 32-byte sortition ID (unique across PoX and Bitcoin forks) */
            sortition_id: string;
            /** @description 0x-prefixed sortition ID of the parent burn block */
            parent_sortition_id: string;
            /** @description 0x-prefixed 20-byte consensus hash identifying the tenure */
            consensus_hash: string;
            /** @description Whether a winning sortition occurred at this burn block */
            was_sortition: boolean;
            /** @description 0x-prefixed index-block ID of the first Stacks block in the tenure (if any) */
            first_block_mined?: string | null;
            /** @description 0x-prefixed SIP-003 binary encoding of all Nakamoto blocks mined in this tenure */
            nakamoto_blocks?: string | null;
        };
        /**
         * @description JSON encoding of `StacksBlockHeaderTypes` returned by /v3/tenures/tip.
         *     Exactly one variant property will be present: either `Epoch2` or `Nakamoto`.
         */
        "tenure-tip.schema": {
            /** @description Header structure for a Stacks 2.x anchored block. */
            Epoch2: {
                version: number;
                total_work: {
                    /** Format: uint64 */
                    burn: number;
                    /** Format: uint64 */
                    work: number;
                };
                /** @description Hex-encoded VRF proof */
                proof: string;
                /** @description 32-byte hex of the parent block header hash */
                parent_block: string;
                /** @description 32-byte hex of the parent microblock header hash */
                parent_microblock: string;
                parent_microblock_sequence: number;
                /** @description Hex-encoded merkle root of the transactions in the block */
                tx_merkle_root: string;
                /** @description Hex-encoded MARF trie root after this block */
                state_index_root: string;
                /** @description Hash160 (20-byte hex) of the microblock public key */
                microblock_pubkey_hash: string;
            };
        } | {
            /** @description Header structure for a Nakamoto-epoch Stacks block. */
            Nakamoto: {
                version: number;
                /**
                 * Format: uint64
                 * @description Number of ancestor blocks including Stacks 2.x blocks
                 */
                chain_length: number;
                /**
                 * Format: uint64
                 * @description Total BTC spent by the sortition that elected this block
                 */
                burn_spent: number;
                /** @description 20-byte hex consensus hash that identifies the tenure */
                consensus_hash: string;
                /** @description 32-byte hex identifier of the parent block (hash+consensus) */
                parent_block_id: string;
                /** @description Hex-encoded merkle root of all transactions in the block */
                tx_merkle_root: string;
                /** @description Hex-encoded MARF trie root after this block */
                state_index_root: string;
                /** @description Unix timestamp (seconds) */
                timestamp: number;
                /** @description Recoverable ECDSA signature from the miner */
                miner_signature: string;
                /** @description Signer-set signatures over the block header */
                signer_signature: string[];
                /** @description Bit-vector, hex-encoded, indicating PoX reward treatment */
                pox_treatment: string;
            };
        };
        /**
         * @description JSON encoding of `BlockHeaderWithMetadata` returned by /v3/tenures/tip_metadata.
         *     Exactly one variant property will be present: either `Epoch2` or `Nakamoto`.
         */
        "tenure-tip-metadata.schema": {
            /** @description Hex-encoded bitcoin block hash */
            burn_view?: string;
            anchored_header: {
                /** @description Header structure for a Stacks 2.x anchored block. */
                Epoch2: {
                    version: number;
                    total_work: {
                        /** Format: uint64 */
                        burn: number;
                        /** Format: uint64 */
                        work: number;
                    };
                    /** @description Hex-encoded VRF proof */
                    proof: string;
                    /** @description 32-byte hex of the parent block header hash */
                    parent_block: string;
                    /** @description 32-byte hex of the parent microblock header hash */
                    parent_microblock: string;
                    parent_microblock_sequence: number;
                    /** @description Hex-encoded merkle root of the transactions in the block */
                    tx_merkle_root: string;
                    /** @description Hex-encoded MARF trie root after this block */
                    state_index_root: string;
                    /** @description Hash160 (20-byte hex) of the microblock public key */
                    microblock_pubkey_hash: string;
                };
            } | {
                /** @description Header structure for a Nakamoto-epoch Stacks block. */
                Nakamoto: {
                    version: number;
                    /**
                     * Format: uint64
                     * @description Number of ancestor blocks including Stacks 2.x blocks
                     */
                    chain_length: number;
                    /**
                     * Format: uint64
                     * @description Total BTC spent by the sortition that elected this block
                     */
                    burn_spent: number;
                    /** @description 20-byte hex consensus hash that identifies the tenure */
                    consensus_hash: string;
                    /** @description 32-byte hex identifier of the parent block (hash+consensus) */
                    parent_block_id: string;
                    /** @description Hex-encoded merkle root of all transactions in the block */
                    tx_merkle_root: string;
                    /** @description Hex-encoded MARF trie root after this block */
                    state_index_root: string;
                    /** @description Unix timestamp (seconds) */
                    timestamp: number;
                    /** @description Recoverable ECDSA signature from the miner */
                    miner_signature: string;
                    /** @description Signer-set signatures over the block header */
                    signer_signature: string[];
                    /** @description Bit-vector, hex-encoded, indicating PoX reward treatment */
                    pox_treatment: string;
                };
            };
        };
        "unconfirmed-transaction.schema": {
            /** @description Hex-encoded transaction data */
            tx?: string;
            status?: {
                Microblock?: {
                    /** @description Block hash containing the microblock */
                    block_hash?: string;
                    /** @description Microblock sequence number */
                    seq?: number;
                };
            } | "Mempool";
        };
        "block-upload-response.schema": {
            /** @description The ID of the uploaded block */
            stacks_block_id?: string;
            /** @description Whether the block was accepted */
            accepted?: boolean;
        };
        "block-replay.schema": {
            /** @description Hash of the block */
            block_hash?: string;
            /** @description Block ID (index block hash) */
            block_id?: string;
            /**
             * Format: uint64
             * @description Height of the Stacks block
             */
            block_height?: number;
            /** @description Consensus hash of the tenure */
            consensus_hash?: string;
            /** @description total fees for the block */
            fees?: number;
            /** @description Uncompressed signature of the miner */
            miner_signature?: string;
            /** @description Parent Block ID (index block hash) */
            parent_block_id?: string;
            signer_signature?: string[];
            /** @description block state index root computed from the MARF (got from the original block) */
            state_index_root?: string;
            timestamp?: number;
            /** @description merkle_root of the included transactions */
            tx_merkle_root?: string;
            /** @description does the merkle_root matches the chain block and the simulated one? */
            valid_merkle_root?: boolean;
            transactions?: {
                /** @description JSON representation of the transaction payload */
                data?: Record<string, never>;
                events?: Record<string, never>[];
                /** @description costs accounting for the transaction */
                execution_cost?: Record<string, never>;
                /** @description hexadecimal representation of the transaction body */
                hex?: string;
                /** @description Clarity value representing the transaction result */
                result?: Record<string, never>;
                /** @description The transaction's result, encoded as a Clarity hex string */
                result_hex?: string;
                /** @description Whether the transaction was aborted by a post-condition */
                post_condition_aborted?: boolean;
                /** @description number of burned stx */
                stx_burned?: number;
                /** @description index of the transaction in the array of transactions */
                tx_index?: number;
                /** @description transaction id */
                txid?: string;
                /** @description optional vm error (for runtime failures) */
                vm_error?: string | null;
            }[];
        };
    };
    responses: {
        /** @description Unauthorized. Invalid or missing authentication token. */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Unauthorized */
                "text/plain": string;
            };
        };
        /** @description Bad request */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Bad request */
                "text/plain": string;
            };
        };
        /** @description Not found */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Not found */
                "text/plain": string;
            };
        };
        /** @description Internal Server Error */
        InternalServerError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Internal Server Error */
                "text/plain": string;
            };
        };
        /** @description Method Not Allowed */
        MethodNotAllowed: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Method Not Allowed. Allowed: GET */
                "text/plain": string;
            };
        };
        /** @description Timeout */
        Timeout: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                /** @example Timeout */
                "text/plain": string;
            };
        };
    };
    parameters: {
        /**
         * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
         *     Must be 28-41 characters long using Stacks c32check format.
         */
        "deployer-address": components["schemas"]["standard-principal.schema"];
        /**
         * @description Contract name. Must start with a letter and can contain letters, numbers,
         *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
         *     Legacy contracts may have names up to 128 characters.
         */
        "contract-name": string;
        /**
         * @description Stacks chain tip to query from. Options:
         *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
         *     - `latest`: Use latest known tip including unconfirmed microblocks.
         *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
         *       If the unconfirmed state check fails with an error, returns 404.
         *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
         *
         *     **Note:** If `tip` is present but contains an invalid or malformed value
         *     (i.e., not `latest` and not a valid 64-character hex block ID),
         *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
         */
        tip: string;
        /**
         * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
         *     Invalid values default to 0 (no proof).
         */
        proof: 0 | 1;
        /**
         * @description Stacks address (28-41 characters) or a Contract identifier in format `{address}.{contract_name}`
         *     (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0.get-info`).
         *     Contract names have a maximum length of 40 characters for new contracts. Legacy contracts may have names up to 128 characters.
         */
        principal: components["schemas"]["principal.schema"];
        /**
         * @description Standard Stacks address (standard principal, not contract principal).
         *     Must be 28-41 characters long using Stacks c32check format.
         */
        "standard-principal": components["schemas"]["standard-principal.schema"];
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    broadcastTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example binary format of 00000000010400bed38c2aadffa348931bcb542880ff79d607afec000000000000000000000000000000c800012b0b1fff6cccd0974966dcd665835838f0985be508e1322e09fb3d751eca132c492bda720f9ef1768d14fdabed6127560ba52d5e3ac470dcb60b784e97dc88c9030200000000000516df0ba3e79792be7be5e50a370289accfc8c9e032000000000000303974657374206d656d6f00000000000000000000000000000000000000000000000000 */
                "application/octet-stream": string;
                /**
                 * @example {
                 *       "tx": "00000000010400bed38c2aadffa348931bcb542880ff79d607afec000000000000000000000000000000c800012b0b1fff6cccd0974966dcd665835838f0985be508e1322e09fb3d751eca132c492bda720f9ef1768d14fdabed6127560ba52d5e3ac470dcb60b784e97dc88c9030200000000000516df0ba3e79792be7be5e50a370289accfc8c9e032000000000000303974657374206d656d6f00000000000000000000000000000000000000000000000000",
                 *       "attachment": "68656c6c6f20776f726c64"
                 *     }
                 */
                "application/json": {
                    /** @description Hex-encoded transaction */
                    tx: string;
                    /** @description Optional hex-encoded attachment for contract-call transactions */
                    attachment?: string;
                };
            };
        };
        responses: {
            /** @description Transaction ID of successful post of a raw tx to the node's mempool. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["transaction-submission-error.schema"];
                    /** @example Failed to decode transaction */
                    "text/plain": string;
                };
            };
            500: components["responses"]["InternalServerError"];
        };
    };
    getContractInterface: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contract interface */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["contract-interface.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getContractDataMapEntry: {
        parameters: {
            query?: {
                /**
                 * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
                 *     Invalid values default to 0 (no proof).
                 */
                proof?: components["parameters"]["proof"];
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                map_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        /** @description Hex string serialization of the lookup key (which should be a Clarity value) */
        requestBody: {
            content: {
                "application/json": string;
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["clarity-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getContractSource: {
        parameters: {
            query?: {
                /**
                 * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
                 *     Invalid values default to 0 (no proof).
                 */
                proof?: components["parameters"]["proof"];
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["contract-source.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    callReadOnlyFunction: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                function_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["read-only-function-args.schema"];
            };
        };
        responses: {
            /** @description Function executed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["read-only-function-result.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    fastCallReadOnlyFunction: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                function_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        /** @description map of arguments and the simulated tx-sender where sender is either a Contract identifier or a normal Stacks address, and arguments is an array of hex serialized Clarity values. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["read-only-function-args.schema"];
            };
        };
        responses: {
            /** @description Function executed successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["read-only-function-result.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            408: components["responses"]["Timeout"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getAccountInfo: {
        parameters: {
            query?: {
                /**
                 * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
                 *     Invalid values default to 0 (no proof).
                 */
                proof?: components["parameters"]["proof"];
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Stacks address (28-41 characters) or a Contract identifier in format `{address}.{contract_name}`
                 *     (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0.get-info`).
                 *     Contract names have a maximum length of 40 characters for new contracts. Legacy contracts may have names up to 128 characters.
                 */
                principal: components["parameters"]["principal"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getFeeTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["fee-transaction-request.schema"];
            };
        };
        responses: {
            /** @description Estimated fees for the transaction */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["fee-transaction-response.schema"];
                };
            };
            /** @description Fee estimation error */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["fee-transaction-error.schema"];
                    /** @example Failed to decode: Failed to parse JSON body */
                    "text/plain": string;
                };
            };
            500: components["responses"]["InternalServerError"];
        };
    };
    getFeeTransfer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Fee rate in microSTX per byte */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example 3 */
                    "application/json": number;
                };
            };
            500: components["responses"]["InternalServerError"];
        };
    };
    getNodeInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["node-info.schema"];
                };
            };
            500: components["responses"]["InternalServerError"];
        };
    };
    getPoxInfo: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pox-info.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    checkTraitImplementation: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                /** @description Stacks address of the trait-defining contract. */
                trait_deployer_address: components["schemas"]["standard-principal.schema"];
                /** @description Contract name of the trait-defining contract. */
                trait_contract_name: string;
                /** @example some-trait */
                trait_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["is-trait-implemented.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
        };
    };
    getClarityMarfValue: {
        parameters: {
            query?: {
                /**
                 * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
                 *     Invalid values default to 0 (no proof).
                 */
                proof?: components["parameters"]["proof"];
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /** @description The 64-character hex-encoded hash of the MARF key. */
                marf_key_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["clarity-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
        };
    };
    getClarityMetadata: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                /**
                 * @description Metadata key. Must be either:
                 *     - "analysis" for contract analysis data
                 *     - "vm-metadata::N::TYPE" where N is the epoch (1-2 digits) and TYPE is one of:
                 *       contract, contract-size, contract-src, contract-data-size, or a valid Clarity name
                 */
                clarity_metadata_key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["clarity-metadata.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getConstantValue: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (e.g. `SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0`).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                deployer_address: components["parameters"]["deployer-address"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                constant_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["constant-value.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    postBlockProposal: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Hex-encoded block data (must be valid SIP-003 serialized block, typically 200+ bytes) */
                    block: string;
                    /** @description Chain ID for the block */
                    chain_id: number;
                };
            };
        };
        responses: {
            /**
             * @description Block proposal has been accepted for processing.
             *     The result will be returned via the event observer.
             */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-proposal.schema"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "result": "Error",
                     *       "message": "Bad Request."
                     *     }
                     */
                    "application/json": components["schemas"]["block-proposal.schema"];
                    /** @example Bad request. */
                    "text/plain": string;
                };
            };
            401: components["responses"]["Unauthorized"];
            /**
             * @description There is an ongoing proposal validation being processed, the new
             *     request cannot be accepted until the prior request has been processed.
             */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-proposal.schema"];
                };
            };
            500: components["responses"]["InternalServerError"];
        };
    };
    getStackerSet: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /** @description reward cycle number */
                cycle_number: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Information for the given reward cycle */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get-stacker-set.schema"];
                };
            };
            /** @description Could not fetch the given reward set */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Response status
                         * @enum {string}
                         */
                        response: "error";
                        /** @description Error type classification */
                        err_type?: string;
                        /** @description Detailed error message */
                        err_msg: string;
                    };
                };
            };
            /** @description Reward cycle not found or does not exist */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example No such file or directory */
                    "text/plain": string;
                };
            };
        };
    };
    getNakamotoBlockById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The block's ID hash (64-character hex string) */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The raw SIP-003-encoded block will be returned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            405: components["responses"]["MethodNotAllowed"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getNakamotoBlockByHeight: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /** @description The block's height (max 4294967295) */
                block_height: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The raw SIP-003-encoded block will be returned. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metadata about the ongoing tenure */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-info.schema"];
                };
            };
        };
    };
    getTenures: {
        parameters: {
            query?: {
                /**
                 * @description The block ID hash of the highest block in this tenure that is already
                 *     known to the caller. Neither the corresponding block nor any of its
                 *     ancestors will be served. This is used to fetch tenure blocks that the
                 *     caller does not have.
                 */
                stop?: string;
            };
            header?: never;
            path: {
                /** @description The tenure-start block ID of the tenure to query (64-character hex string) */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description SIP-003-encoded Nakamoto blocks, concatenated together */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            405: components["responses"]["MethodNotAllowed"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureBlocks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The hex-encoded consensus hash of the tenure to query (40 hexadecimal characters, without 0x prefix) */
                consensus_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Stacks blocks in the tenure */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-blocks.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureBlocksByHash: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The hex-encoded Bitcoin block hash of the tenure to query (64 hexadecimal characters, without 0x prefix) */
                burnchain_block_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Stacks blocks in the tenure */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-blocks.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureBlocksByHeight: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Bitcoin block height of the tenure to query */
                burnchain_block_height: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Stacks blocks in the tenure */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-blocks.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getLatestSortitions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Latest sortition information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sortitions.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getLatestAndLastWinningSortitions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Latest and last sortition information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sortitions.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getSortitionByConsensusHash: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded consensus hash (40 characters) */
                consensus_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sortition information for the consensus hash */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sortitions.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getSortitionByBurnHeaderHash: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded burn header hash (64 characters) */
                burn_header_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sortition information for the burn header hash */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sortitions.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getSortitionByBurnBlockHeight: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Burn block height (integer, max 4294967295) */
                height: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sortition information for the burn block height */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["sortitions.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getSignerBlocksSigned: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded compressed Secp256k1 public key of signer */
                signer_pubkey: string;
                /** @description Reward cycle number */
                cycle_number: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Number of blocks signed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "blocks_signed": 7
                     *     }
                     */
                    "application/json": components["schemas"]["signer-blocks-signed.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTransactionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Transaction ID (64 hexadecimal characters) */
                txid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Transaction JSON with index_block_hash, transaction body and result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get-transaction.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
            /** @description Transaction indexing not enabled */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example Transaction indexing is not enabled */
                    "text/plain": string;
                };
            };
        };
    };
    getNodeHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get-health.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getAttachment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded SHA-1 hash of the attachment (40 characters) */
                hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The attachment content */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["attachment-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
        };
    };
    getAttachmentsInventory: {
        parameters: {
            query: {
                /** @description Hex-encoded index block hash (64 characters) */
                index_block_hash: string;
                /**
                 * @description Comma-separated list of page indexes to query.
                 *     - Maximum 8 pages per request
                 *     - Each index must be 0-4294967295 (u32 range)
                 *     - Values outside u32 range return 400 Bad Request
                 */
                pages_indexes: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Attachment inventory bitfield */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["attachment-inventory.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
        };
    };
    getConfirmedMicroblocks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded Stacks block ID (64 characters) */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Stream of confirmed microblocks */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getMicroblockById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded microblock hash (64 characters) */
                microblock_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The microblock data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getUnconfirmedMicroblocks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded parent block ID (64 characters) */
                block_id: string;
                /** @description Starting sequence number (0-65535) */
                seq: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Stream of unconfirmed microblocks */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    postMicroblock: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description Index-block hash of the accepted microblock */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example 3e4f5d6b7c8a9e0ff1122303445566778899aabbccddeeff0011223344556677 */
                    "application/json": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getStackerDbChunk: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                /** @description Slot ID (u32 range) */
                slot_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description StackerDB chunk data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getStackerDbChunkVersioned: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                /** @description Slot ID (u32 range) */
                slot_id: number;
                /** @description Specific slot version (u32 range) */
                slot_version: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description StackerDB chunk data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getStackerDbMetadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description StackerDB metadata */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["stackerdb-metadata.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    postStackerDbChunk: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["stackerdb-chunk-data.schema"];
            };
        };
        responses: {
            /** @description Chunk submission result (both success and failure cases) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["stackerdb-chunk-ack-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    listStackerDbReplicas: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of StackerDB replicas */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["stackerdb-replicas.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getContractDataVariable: {
        parameters: {
            query?: {
                /**
                 * @description Controls MARF proof inclusion in response. Set to 1 (default) to include proof, 0 to exclude.
                 *     Invalid values default to 0 (no proof).
                 */
                proof?: components["parameters"]["proof"];
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /**
                 * @description Standard Stacks address (standard principal, not contract principal).
                 *     Must be 28-41 characters long using Stacks c32check format.
                 */
                principal: components["parameters"]["standard-principal"];
                /**
                 * @description Contract name. Must start with a letter and can contain letters, numbers,
                 *     hyphens, and underscores. Maximum length is 40 characters for new contracts.
                 *     Legacy contracts may have names up to 128 characters.
                 */
                contract_name: components["parameters"]["contract-name"];
                /** @description Variable name (must be a valid Clarity name) */
                var_name: components["schemas"]["clarity-name.schema"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The data variable value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["clarity-data.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
        };
    };
    getBlockHeaders: {
        parameters: {
            query?: {
                /**
                 * @description Stacks chain tip to query from. Options:
                 *     - (empty/omitted): Use latest anchored tip (canonical confirmed state)
                 *     - `latest`: Use latest known tip including unconfirmed microblocks.
                 *       If no unconfirmed state is available, falls back to the confirmed canonical tip.
                 *       If the unconfirmed state check fails with an error, returns 404.
                 *     - `{block_id}`: Use specific block ID (64 hex characters, case-insensitive)
                 *
                 *     **Note:** If `tip` is present but contains an invalid or malformed value
                 *     (i.e., not `latest` and not a valid 64-character hex block ID),
                 *     the node silently falls back to the latest anchored tip (same as omitting `tip`).
                 */
                tip?: components["parameters"]["tip"];
            };
            header?: never;
            path: {
                /** @description Number of headers to return (max 256) */
                quantity: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of block headers */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-headers.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getLegacyBlockById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Hex-encoded block ID (64 characters) */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The block data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getNetworkPeers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of neighbor peers */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["network-peers.schema"];
                };
            };
        };
    };
    getTenureForkInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Starting consensus hash (40 hexadecimal characters, without 0x prefix) */
                start: string;
                /** @description Stopping consensus hash (40 hexadecimal characters, without 0x prefix) */
                stop: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ordered list of tenure fork events from `stop` back to (and including) `start` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-fork-info.schema"][];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureTip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Consensus hash (40 characters) */
                consensus_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tenure tip block information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-tip.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getTenureTipMetadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Consensus hash (40 characters) */
                consensus_hash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tenure tip block information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tenure-tip-metadata.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    getUnconfirmedTransactionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Transaction ID (64 hexadecimal characters) */
                txid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Unconfirmed transaction details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["unconfirmed-transaction.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    uploadLegacyBlock: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Consensus hash (40 hex characters) */
                consensus_hash: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description Block upload result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-upload-response.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    queryMempool: {
        parameters: {
            query?: {
                /** @description Transaction ID to start pagination from */
                page_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description Stream of missing transactions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            400: components["responses"]["BadRequest"];
            500: components["responses"]["InternalServerError"];
        };
    };
    uploadNakamotoBlock: {
        parameters: {
            query?: {
                /**
                 * @description If set to `"1"` the node will broadcast the uploaded block to peers.
                 *     When present the request must include a valid `Authorization` header.
                 */
                broadcast?: "1";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description Block upload result. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-upload-response.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            500: components["responses"]["InternalServerError"];
        };
    };
    blockReplay: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The block ID hash */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Content of the replayed block */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block-replay.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
    blockSimulate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The block ID hash */
                block_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    transactions_hex?: string[];
                    mint?: {
                        /** @description Principal address receiving STX */
                        principal?: string;
                        /** @description amount of microSTX to mint for the block simulation */
                        amount?: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Content of the simulated block */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "summary": "Block replay response",
                     *       "value": {
                     *         "block_hash": "732f57eefc4dbfb015c9988d9943c47273d25fbe039220d53f311b307609c83f",
                     *         "block_id": "856f6b08f338164df7422f66337c8ce916b6b0301fcaa09de06c61cfb79e2a45",
                     *         "block_height": 123,
                     *         "consensus_hash": "33dffda027e2ca3aaf278855c59a8a0b2d2dd51f",
                     *         "fees": 1,
                     *         "miner_signature": "004b2878d7639060c4d183b1338447c06ceb0ad55424856c550a4c988401fdf8cf1fe6e8c05cc0e3ff8d4383590bf700cb5dd1a8bb3269f7125f6e0704b66eade8",
                     *         "parent_block_id": "3ac36fc1acfc86ba80ea27cd26017c675f75bc07fb042814b72e74cd7d331503",
                     *         "signer_signature": [
                     *           "00d4e08331db614d18d7b5af53cf9bc03add9c7a2dcb6f0448721de7ea98f662cf7dc43ee73e14d18dfae3d3d349ff67e0fd773a446fb8c949c93ae4676f4d34bc",
                     *           "01619c6e69bad5b43e11bae3eb4d4626e5cf19d595923b0b5d2053e8883a266b41315fdaefd1eca03c5c0580b0f7fd28053c3f34eb0a12220b61392d342f5afb0d",
                     *           "0078fa352e0e4d2d94b25d4070ae24a819f268b2260a1e4d0d867415dbdc39e2cf75e57de69375794073e22a75873a5e1ca33ed96eadd8086415e934f697b78fdb",
                     *           "00b8d9b0d0cdfabe3c65237801e714185777f60507c773fcd2a72ed00b9d4c59cb5ab96e0e8d545bd562b5ca3de6db1d3b9fccd8f41c3bfa7de3528deb1acd30d6"
                     *         ],
                     *         "state_index_root": "839b826290027e5b92de415495be7bab2eab2ad4e2f8c371a1a773ae552fedba",
                     *         "timestamp": 1758284349,
                     *         "transactions": [
                     *           {
                     *             "data": {
                     *               "anchor_mode": "OnChainOnly",
                     *               "auth": {
                     *                 "Standard": {
                     *                   "Singlesig": {
                     *                     "hash_mode": "P2PKH",
                     *                     "key_encoding": "Compressed",
                     *                     "nonce": 99,
                     *                     "signature": "01e29229b386e1f69ffd91e339c878246235ec1cd4771b42a7f45e1ed108643bc9417d43dd96a02c93314ef4cf5bcbcc5642df2e1f5a177333ff983c8719d80661",
                     *                     "signer": "2965a4e6e4226868fa3ae88b2b9bb9e937d77fba",
                     *                     "tx_fee": 1
                     *                   }
                     *                 }
                     *               },
                     *               "chain_id": 2147483648,
                     *               "payload": {
                     *                 "TokenTransfer": [
                     *                   {
                     *                     "Standard": [
                     *                       26,
                     *                       [
                     *                         189,
                     *                         65,
                     *                         200,
                     *                         147,
                     *                         188,
                     *                         192,
                     *                         157,
                     *                         152,
                     *                         224,
                     *                         211,
                     *                         77,
                     *                         255,
                     *                         135,
                     *                         190,
                     *                         175,
                     *                         153,
                     *                         88,
                     *                         51,
                     *                         140,
                     *                         222
                     *                       ]
                     *                     ]
                     *                   },
                     *                   1,
                     *                   "00000000000000000000000000000000000000000000000000000000000000000000"
                     *                 ]
                     *               },
                     *               "post_condition_mode": "Deny",
                     *               "post_conditions": [],
                     *               "version": "Testnet"
                     *             },
                     *             "events": [
                     *               {
                     *                 "committed": true,
                     *                 "event_index": 0,
                     *                 "stx_transfer_event": {
                     *                   "amount": "1",
                     *                   "memo": "00000000000000000000000000000000000000000000000000000000000000000000",
                     *                   "recipient": "ST2YM3J4KQK09V670TD6ZZ1XYNYCNGCWCVTASN5VM",
                     *                   "sender": "STMPB976WGH6GT7T7BM8PAWVQ7MKFNVZQAXS4BFS"
                     *                 },
                     *                 "txid": "0xf14dd7dec56405fd7dac69c3080fb569fae4c49c591f9ad0e5cf5c797add9005",
                     *                 "type": "stx_transfer_event"
                     *               }
                     *             ],
                     *             "execution_cost": {
                     *               "read_count": 0,
                     *               "read_length": 0,
                     *               "runtime": 0,
                     *               "write_count": 0,
                     *               "write_length": 0
                     *             },
                     *             "hex": "808000000004002965a4e6e4226868fa3ae88b2b9bb9e937d77fba000000000000006300000000000000010001e29229b386e1f69ffd91e339c878246235ec1cd4771b42a7f45e1ed108643bc9417d43dd96a02c93314ef4cf5bcbcc5642df2e1f5a177333ff983c8719d8066101020000000000051abd41c893bcc09d98e0d34dff87beaf9958338cde000000000000000100000000000000000000000000000000000000000000000000000000000000000000",
                     *             "result": {
                     *               "Response": {
                     *                 "committed": true,
                     *                 "data": {
                     *                   "Bool": true
                     *                 }
                     *               }
                     *             },
                     *             "result_hex": "0x0703",
                     *             "post_condition_aborted": false,
                     *             "stx_burned": 0,
                     *             "tx_index": 0,
                     *             "txid": "f14dd7dec56405fd7dac69c3080fb569fae4c49c591f9ad0e5cf5c797add9005"
                     *           }
                     *         ],
                     *         "tx_merkle_root": "a68e3c76471d9e66b71a14165c4c9a2b980c51efb5b313425cffcef7172d6080",
                     *         "valid_merkle_root": true
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["block-replay.schema"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
            500: components["responses"]["InternalServerError"];
        };
    };
}
