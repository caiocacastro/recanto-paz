import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormGroup,
  FormLabel,
} from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../model/style';

export const Container = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.2s;

  :hover {
    background-color: #fee2c500;
    transform: scale(1.1);
  }
`;

export const Component = styled.div`
  margin: 0 5px;
  font-weight: bold;
  color: ${Theme.primaryLightColor};

  > span > svg {
    color: ${Theme.primaryLightColor};
  }
`;

export const LoginTitle = styled(DialogTitle)`
  background-color: ${Theme.primaryDarkColor};
  color: ${Theme.primaryLightColor};
`;

export const LoginContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 !important;
`;

export const LoginField = styled(FormGroup)`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0;
`;

export const LoginLabel = styled(FormLabel)`
  color: ${Theme.primaryDarkColor} !important;
  font-weight: bold !important;
`;
