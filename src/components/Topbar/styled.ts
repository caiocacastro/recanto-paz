import { Button } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../model/style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    ${Theme.primaryDarkColor},
    ${Theme.secondaryDarkColor} 70%
  );
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
`;

export const ButtonArea = styled.div`
  display: flex;

  > button {
    color: ${Theme.primaryLightColor};
    font-weight: bold;
    padding: 16px 40px;
  }
`;

type SeparatorProps = {
  first?: boolean;
};

export const Separator = styled.div<SeparatorProps>`
  width: 1px;
  ${`background: linear-gradient(180deg, ${Theme.secondaryDarkColor} 15%, ${Theme.primaryLightColor}, ${Theme.primaryDarkColor} 85%)`};
  ${({ first }) => first && `margin-left: 40px`}
`;

type CustomButtomProps = {
  selected?: boolean;
};

export const CustomButtom = styled(Button)<CustomButtomProps>`
  opacity: 0.5;

  ${({ selected }) =>
    selected &&
    `
    background: linear-gradient(0deg, ${Theme.secondaryLightColor}a1, #00000000 50%);
    border-radius: 0px !important;
    border-bottom: 2px !important;
    border-style: solid !important;
    opacity: 1;
    `}

  transition: 0.2s all ease !important;

  :hover {
    ${({ selected }) => !selected && `opacity: 0.8`};
  }
`;
