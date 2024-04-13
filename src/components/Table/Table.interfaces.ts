import { TableHead } from '@mui/material';

export interface TableElement {
  key: string;
  value: string;
  click?: () => void;
}
export type TableHead = Pick<TableElement, 'value'>;

export type TableLine = TableElement[];

export interface TableData {
  tableTitle: string;
  tableLines: TableLine[];
  tableHader: TableHead[];
}

export interface TableProps {
  tableData: TableData;
}
