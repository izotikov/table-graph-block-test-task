import ActionsHoldersTable from "@components/widgets/actions-holders-table/ActionsHoldersTable";
import {getTodayData, normalizeTableData} from "@utils/utils";
import {ActionerHolders} from "@types/dataTypes";
import styles from './TableBlock.module.scss';

interface TableBlockProps {
	normalizedData: ActionerHolders[];
}

const TableBlock = ({normalizedData}: TableBlockProps) => {

	const dateToday = getTodayData();
	const normalizedTableData = normalizeTableData(normalizedData);

	return (
		<div className={styles.tableWrapper}>
			<ActionsHoldersTable data={normalizedTableData} />
			<p className={styles.lastUpdate}>Дата последнего обновления этой структуры: {dateToday}</p>
		</div>
	);
};

export default TableBlock;