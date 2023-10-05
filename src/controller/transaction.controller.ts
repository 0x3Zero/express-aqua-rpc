import { Fluence } from '@fluencelabs/fluence';

import {
  get_active_crons,
  get_all_crons,
  get_meta_contract,
  get_meta_contract_by_id,
  get_metadata,
  get_metadata_with_history,
  get_metadatas,
  get_metadatas_count,
  get_metadatas_by_block,
  get_metadatas_all_version,
  get_metadatas_by_tokenkey,
  get_pending_transactions,
  get_transaction,
  Get_active_cronsResult,
  Get_all_cronsResult,
  Get_meta_contractResult,
  Get_metadataResult,
  Get_metadata_with_historyResult,
  Get_metadatasResult,
  Get_pending_transactionsResult,
  Get_transactionResult,
  Get_all_cron_txsResult,
  get_all_cron_txs,
  Deserialize_forkResult,
  deserialize_fork,
  get_cron_tx_by_tx_hash,
  Get_cron_tx_by_tx_hashResult,
  get_node_clock,
  Get_node_clockResult,
  Search_cron_txResult,
  Search_metadatasResult,
  search_cron_tx,
  search_metadatas,
  search_metadatas_count,
  Send_cron_txResult,
  send_cron_tx,
  Get_transactionsResult,
  get_transactions,
  Get_complete_transactionsResult,
  get_complete_transactions,
  get_cron_tx_latest_block,
  get_cron_latest_block,
  PublishResult,
  PublishArgTx_request,
  publish,
  publish_batch,
  ipfs_get,
  Ipfs_getResult,
  generate_token_key,
  generate_data_key,
} from '../_aqua/transaction';

type Filter = {
  query: { column: string; op: string; query: string }[];
  ordering: { column: string; sort: string }[];
  from: number;
  to: number;
};

type SendCronTx = {
  hash: string;
  data_key: string;
  data: string;
  tx_block_number: number;
  tx_hash: string;
  token_id: string;
};

export class TransactionController {
  constructor() {
    this.start();
  }

  private async start() {
    await Fluence.start({
      connectTo: {
        multiaddr: process.env.FLUENCE_NODE_MULTIADDRESS as any,
        peerId: process.env.FLUENCE_NODE_PEERID as any,
      },
    });
    console.log(Fluence.getStatus().peerId);
  }

  async deserialize_fork(args: Array<string>): Promise<Deserialize_forkResult | undefined> {
    try {
      return await deserialize_fork(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_active_crons(): Promise<Get_active_cronsResult | undefined> {
    try {
      return await get_active_crons();
    } catch (e) {
      console.log(e);
    }
  }

  async get_all_cron_txs(): Promise<Get_all_cron_txsResult | undefined> {
    try {
      return await get_all_cron_txs();
    } catch (e) {
      console.log(e);
    }
  }

  async get_all_crons(): Promise<Get_all_cronsResult | undefined> {
    try {
      return await get_all_crons();
    } catch (e) {
      console.log(e);
    }
  }

  async get_complete_transactions(args: Array<number>): Promise<Get_complete_transactionsResult | undefined> {
    try {
      return await get_complete_transactions(args[0], args[1]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_cron_tx_by_tx_hash(args: Array<string>): Promise<Get_cron_tx_by_tx_hashResult | undefined> {
    try {
      return await get_cron_tx_by_tx_hash(args[0], args[1], args[2], args[3]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_cron_tx_latest_block(args: Array<string>): Promise<number | undefined> {
    try {
      return await get_cron_tx_latest_block(args[0], args[1], args[2]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_cron_latest_block(args: Array<string>): Promise<number | undefined> {
    try {
      return await get_cron_latest_block(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_meta_contract(args: Array<string>): Promise<Get_meta_contractResult | undefined> {
    try {
      return await get_meta_contract(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_meta_contract_by_id(args: Array<string>): Promise<Get_meta_contractResult | undefined> {
    try {
      return await get_meta_contract_by_id(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadata(args: Array<string>): Promise<Get_metadataResult | undefined> {
    try {
      return await get_metadata(args[0], args[1], args[2], args[3], args[4]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadata_with_history(args: Array<string>): Promise<Get_metadata_with_historyResult | undefined> {
    try {
      return await get_metadata_with_history(args[0], args[1], args[2], args[3], args[4]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadatas(args: Array<string>): Promise<Get_metadatasResult | undefined> {
    try {
      return await get_metadatas(args[0], args[1]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadatas_count(args: Array<string>): Promise<number | undefined> {
    try {
      return await get_metadatas_count(args[0], args[1]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadatas_by_block(args: Array<string>): Promise<Get_metadatasResult | undefined> {
    try {
      return await get_metadatas_by_block(args[0], args[1], args[2]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadatas_all_version(args: Array<string>): Promise<Get_metadatasResult | undefined> {
    try {
      return await get_metadatas_all_version(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_metadatas_by_tokenkey(args: Array<string>): Promise<Get_metadatasResult | undefined> {
    try {
      return await get_metadatas_by_tokenkey(args[0], args[1], args[2]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_node_clock(): Promise<Get_node_clockResult | undefined> {
    try {
      return await get_node_clock();
    } catch (e) {
      console.log(e);
    }
  }

  async get_pending_transactions(): Promise<Get_pending_transactionsResult | undefined> {
    try {
      return await get_pending_transactions();
    } catch (e) {
      console.log(e);
    }
  }

  async get_transaction(args: Array<string>): Promise<Get_transactionResult | undefined> {
    try {
      return await get_transaction(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async get_transactions(args: Filter): Promise<Get_transactionsResult | undefined> {
    try {
      return await get_transactions(args.query, args.ordering, args.from, args.to);
    } catch (e) {
      console.log(e);
    }
  }

  async search_cron_tx(args: Array<string>): Promise<Search_cron_txResult | undefined> {
    try {
      return await search_cron_tx(args[0], args[1], args[2]);
    } catch (e) {
      console.log(e);
    }
  }

  async search_metadatas(args: Filter): Promise<Search_metadatasResult | undefined> {
    try {
      return await search_metadatas(args.query, args.ordering, args.from, args.to);
    } catch (e) {
      console.log(e);
    }
  }

  async search_metadatas_count(args: Filter): Promise<number | undefined> {
    try {
      return await search_metadatas_count(args.query, args.ordering, args.from, args.to);
    } catch (e) {
      console.log(e);
    }
  }

  async send_cron_tx(args: SendCronTx): Promise<Send_cron_txResult | undefined> {
    try {
      return await send_cron_tx(args.hash, args.data, args.tx_block_number, args.tx_hash, args.token_id);
    } catch (e) {
      console.log(e);
    }
  }

  async publish(args: PublishArgTx_request): Promise<PublishResult | undefined> {
    try {
      return await publish(args);
    } catch (e) {
      console.log(e);
    }
  }

  async publish_batch(args: PublishArgTx_request[]): Promise<PublishResult[] | undefined> {
    try {
      return await publish_batch(args);
    } catch (e) {
      console.log(e);
    }
  }

  async ipfs_get(args: Array<string>): Promise<Ipfs_getResult | undefined> {
    try {
      return await ipfs_get(args[0]);
    } catch (e) {
      console.log(e);
    }
  }

  async generate_token_key(args: Array<string>): Promise<string | undefined> {
    try {
      return await generate_token_key(args[0], args[1]);
    } catch (e) {
      console.log(e);
    }
  }

  async generate_data_key(args: Array<string>): Promise<string | undefined> {
    try {
      return await generate_data_key(args[0], args[1], args[2]);
    } catch (e) {
      console.log(e);
    }
  }
}
