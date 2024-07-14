import { TableHead } from '@mui/material';

export interface TableElement {
  key: string;
  value: string;
  click?: () => void;
}
export type TableHead = Pick<TableElement, 'value'>;

export type TableLine = {
  elements: TableElement[];
  onEdit?: () => void;
  onRemove?: () => void;
};

export interface TableData {
  tableTitle: string;
  tableHader: TableHead[];
  tableLines: TableLine[];
}

export interface TableProps {
  tableData: TableData;
}
