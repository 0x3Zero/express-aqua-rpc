import { Fluence } from '@fluencelabs/fluence';

import {
	Send_transactionArgArgs,
	get_active_crons,
	get_all_crons,
	get_meta_contract,
	get_metadata,
	get_metadata_with_history,
	get_metadatas,
	get_pending_transactions,
	get_transaction,
	send_transaction,
	Get_active_cronsResult,
	Get_all_cronsResult,
	Get_meta_contractResult,
	Get_metadataResult,
	Get_metadata_with_historyResult,
	Get_metadatasResult,
	Get_pending_transactionsResult,
	Get_transactionResult,
	Send_transactionResult,
	Get_all_cron_txsResult,
	get_all_cron_txs,
	Deserialize_forkResult,
	deserialize_fork,
	Get_cron_tx_by_tx_hashArgArgs,
	get_cron_tx_by_tx_hash,
	get_cron_tx_latest_block,
	Get_cron_tx_latest_blockArgArgs,
	Get_cron_tx_by_tx_hashResult,
	get_node_clock,
	Get_node_clockResult,
	Get_success_transactionsResult,
	get_success_transactions,
	Get_success_transactionsArgArgs,
	Search_cron_txArgArgs,
	Search_cron_txResult,
	Search_metadatasArgArgs,
	Search_metadatasResult,
	search_cron_tx,
	search_metadatas,
	Send_cron_txArgArgs,
	Send_cron_txResult,
	send_cron_tx,
} from '../_aqua/transaction';

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

	async deserialize_fork(
		args: Array<string>
	): Promise<Deserialize_forkResult | undefined> {
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

	async get_cron_tx_by_tx_hash(
		args: Get_cron_tx_by_tx_hashArgArgs
	): Promise<Get_cron_tx_by_tx_hashResult | undefined> {
		try {
			return await get_cron_tx_by_tx_hash(args);
		} catch (e) {
			console.log(e);
		}
	}

	async get_cron_tx_latest_block(
		args: Get_cron_tx_latest_blockArgArgs
	): Promise<number | undefined> {
		try {
			return await get_cron_tx_latest_block(args);
		} catch (e) {
			console.log(e);
		}
	}

	async get_meta_contract(
		args: Array<string>
	): Promise<Get_meta_contractResult | undefined> {
		try {
			return await get_meta_contract(args[0]);
		} catch (e) {
			console.log(e);
		}
	}

	async get_metadata(
		args: Array<string>
	): Promise<Get_metadataResult | undefined> {
		try {
			return await get_metadata(args[0], args[1], args[2]);
		} catch (e) {
			console.log(e);
		}
	}

	async get_metadata_with_history(
		args: Array<string>
	): Promise<Get_metadata_with_historyResult | undefined> {
		try {
			return await get_metadata_with_history(args[0], args[1], args[2]);
		} catch (e) {
			console.log(e);
		}
	}

	async get_metadatas(
		args: Array<string>
	): Promise<Get_metadatasResult | undefined> {
		try {
			return await get_metadatas(args[0]);
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

	async get_pending_transactions(): Promise<
		Get_pending_transactionsResult | undefined
	> {
		try {
			return await get_pending_transactions();
		} catch (e) {
			console.log(e);
		}
	}

	async get_success_transactions(
		args: Get_success_transactionsArgArgs
	): Promise<Get_success_transactionsResult | undefined> {
		try {
			return await get_success_transactions(args);
		} catch (e) {
			console.log(e);
		}
	}

	async get_transaction(
		args: Array<string>
	): Promise<Get_transactionResult | undefined> {
		try {
			return await get_transaction(args[0]);
		} catch (e) {
			console.log(e);
		}
	}

	async search_cron_tx(
		args: Search_cron_txArgArgs
	): Promise<Search_cron_txResult | undefined> {
		try {
			return await search_cron_tx(args);
		} catch (e) {
			console.log(e);
		}
	}

	async search_metadatas(
		args: Search_metadatasArgArgs
	): Promise<Search_metadatasResult | undefined> {
		try {
			return await search_metadatas(args);
		} catch (e) {
			console.log(e);
		}
	}

	async send_cron_tx(
		args: Send_cron_txArgArgs
	): Promise<Send_cron_txResult | undefined> {
		try {
			return await send_cron_tx(args);
		} catch (e) {
			console.log(e);
		}
	}

	async send_transaction(
		args: Send_transactionArgArgs
	): Promise<Send_transactionResult | undefined> {
		try {
			return await send_transaction(args);
		} catch (e) {
			console.log(e);
		}
	}

	[key: string]: ((...args: any[]) => any) | undefined;
}
