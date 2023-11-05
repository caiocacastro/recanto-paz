import styled from 'styled-components';
import tokens from '../../../../constants/tokens';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  direction: rtl;
  /* ::after {
    content: 'casa ';
    height: 30px;
    width: 30px;
    border-radius: 10px;
    background-color: red;
  } */
`;

export const Content = styled.div`
  padding: ${tokens.SizeSpaceLarge};
  ::after {
    content: 'testando';
  }
`;

export const TabButton = styled(Link)<{ selected: boolean }>`
  padding: ${tokens.SizeSpaceXlarge} ${tokens.SizeSpaceLarge};
  color: ${tokens.lightColor};
  font-weight: lighter;
  border-radius: 24px 0 0 24px;
  text-align: center;
  cursor: pointer;
  width: 80%;

  ${({ selected }) =>
    selected &&
    `
    color: ${tokens.darkColor};
    font-weight: bold;
    background: #fff;
    font-size: 18px;
    box-shadow: -14px 1px 12px 1px rgba(0, 0, 0, 0.1);
    margin: 24px 0;
  `}
  text-decoration: none;
`;

export const Divider = styled.div<{ location: 'before' | 'after' }>`
  height: 50px;
  width: 50px;
  background-color: #fff;
  background-image: radial-gradient(
    ${({ location }) =>
      location === 'before' ? 'at top left' : 'at bottom left'},
    gray 68%,
    #000000aa 69%,
    gray 70%,
    transparent 0
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
