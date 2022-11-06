import styled from 'styled-components';
import { Theme } from '../../model/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 320px;
  width: 320px;
  padding: 10px;
  margin: 2px;

  cursor: pointer;
  transition: 0.3s all ease;

  font-weight: bold;
  /* border: 1px solid transparent; */
  border: 1px solid ${Theme.primaryDarkColor}11;
  border-radius: 4px;

  :hover {
    transform: scale(1.05);
    background: ${`linear-gradient(315deg,${Theme.primaryDarkColor}, ${Theme.secondaryDarkColor} 40%)`};
    color: ${Theme.primaryLightColor};
    /* border-color: ${Theme.secondaryLightColor}; */
    /* border-width: 3px; */
    border-radius: 8px;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.2);

    > div > svg {
      background-color: ${Theme.secondaryLightColor}33;
      border: 1px solid ${Theme.secondaryLightColor}33;
    }
  }
`;

export const OptionName = styled.div`
  text-align: center;
  vertical-align: middle;
  text-transform: capitalize;
  margin: 20px 0 10px;
  font-size: 18px;
`;

export const OptionSubName = styled.div`
  font-size: 13px;
  font-weight: lighter;
  text-align: center;
`;

export const OptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid ${Theme.secondaryDarkColor}33; */
  > svg {
    padding: 30px;
    background-color: ${Theme.primaryDarkColor}22;
    border-radius: 100%;
    font-size: 100px;
  }
`;
