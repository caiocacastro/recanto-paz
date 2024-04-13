import {
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import { TableProps, TableElement } from './Table.interfaces';

const Table = ({ tableData }: TableProps) => {
  const renderTableTitle = () => (
    <Toolbar>
      <Typography>{tableData.tableTitle}</Typography>
    </Toolbar>
  );

  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        {tableData.tableHader.map((row) => (
          <TableCell>{row.value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const handleClick = (line: TableElement) => {
    line.click?.();
  };

  const renderTableBody = () => {
    return (
      <TableBody>
        {tableData.tableLines.map((line) => (
          <TableRow>
            {line.map((cell) => (
              <TableCell onClick={() => handleClick(cell)}>
                {cell.value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <Paper>
      {renderTableTitle()}
      <TableContainer>
        <MuiTable>
          {renderTableHead()}
          {renderTableBody()}
        </MuiTable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
