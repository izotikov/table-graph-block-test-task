import {FC} from 'react';
import {Table } from "antd";
import type {TableColumnsType } from "antd";
import {ActionerHolders} from "@types/dataTypes";



export interface BaseTableProps {
  data: ActionerHolders[];
  columns: TableColumnsType[];
  className: string;
}

const BaseTable: FC<BaseTableProps> = ({data, columns, className}) => {

  return (
    <Table className={className} dataSource={data} columns={columns} pagination={{ hideOnSinglePage: true }}>

    </Table>
  );
};

export default BaseTable;