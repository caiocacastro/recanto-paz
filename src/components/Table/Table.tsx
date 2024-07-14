import {
  IconButton,
  Table as MuiTable,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { TableProps } from './Table.interfaces';
import { Cell, HeaderCell, Title } from './Table.styles';
import { Delete, DeleteOutline, Edit, EditOff } from '@mui/icons-material';

const Table = ({ tableData }: TableProps) => {
  const renderTableTitle = () => (
    <Title>
      <Typography>{tableData.tableTitle}</Typography>
    </Title>
  );

  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        {tableData.tableHader.map((row) => (
          <HeaderCell>{row.value}</HeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );

  // const handleClick = (line: TableElement) => {
  //   line.click?.();
  // };

  const renderTableBody = () => {
    return (
      <TableBody>
        {tableData.tableLines.map((line) => (
          <TableRow>
            {line.elements.map((cell) => (
              <Cell onClick={cell.click}>{cell.value}</Cell>
            ))}

            {/* {(line.onEdit || line.onRemove) && ( */}
            {/* TODO : Alterar logica de botao para nao clicavel (estilizacao inclusa), se usuário não tem perfil para clique*/}
            <>
              <IconButton aria-label="edit" onClick={line.onEdit}>
                {line.onEdit ? <Edit /> : <EditOff />}
              </IconButton>
              <IconButton aria-label="delete" onClick={line.onRemove}>
                {line.onRemove ? <Delete /> : <DeleteOutline />}
              </IconButton>
            </>
            {/* )} */}
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
