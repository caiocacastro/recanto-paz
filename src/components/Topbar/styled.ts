import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fee2c5;
`;

export const ButtonArea = styled.div`
  display: flex;

  > button {
    color: #001d6e;
    font-weight: bold;
    padding: 20px 40px;
    margin: 8px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  background: linear-gradient(180deg, #fee2c5 20%, #001d6e, #fee2c5 80%);
`;
