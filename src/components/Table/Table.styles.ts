import { TableCell, TableCellProps, Toolbar } from '@mui/material';
import styled from 'styled-components';
import tokens from '../../constants/tokens';

// type CellProps = {
//   hasClick?: boolean;
// };

export const Title = styled(Toolbar)`
  align-items: center;
  justify-content: center;

  p {
    font-weight: bold !important;
    font-size: larger;
  }
`;

export const Cell = styled(TableCell)<TableCellProps>`
  font-size: 20px;
  user-select: none;
  border-radius: ${tokens.SizeSpaceRegular};
  ${({ onClick }) =>
    onClick
      ? `
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      transition: ease-in 0.2s all;
    }
  `
      : ''};
`;

export const HeaderCell = styled(Cell)<TableCellProps>`
  font-weight: bold !important;
  text-transform: capitalize;
`;
