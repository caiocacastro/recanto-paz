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
