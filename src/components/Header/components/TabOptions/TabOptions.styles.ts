import styled from "styled-components";
import tokens from "../../../../constants/tokens";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TabButton = styled(Link)<{ selected: boolean }>`
  padding: ${tokens.SizeSpaceLarge};
  color: ${({ selected }) => (selected ? tokens.darkColor : tokens.lightColor)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  text-decoration: none;
`;
