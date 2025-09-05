import {FC} from 'react';
import {ActionerHolders} from "@types/dataTypes";
import BaseTable from "@components/shared/ui/base-table/BaseTable";
import type {TableColumnsType} from "antd";
import styles from './ActionsHoldersTable.module.scss';

interface CompanyInformationTableProps {
    data: ActionerHolders[];
}

const ActionsHoldersTable: FC<CompanyInformationTableProps> = ({data}) => {

    const columns: TableColumnsType[] = [
        {
            title: 'Держатель акции',
            dataIndex: 'holder',
            key: 'holder',
        },
        {
            title: '% Доли',
            dataIndex: 'share_percent',
            key: 'share_percent',
        },
    ];

    return (
        <BaseTable data={data} columns={columns} className={styles.table}/>
    );
};

export default ActionsHoldersTable;