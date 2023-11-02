import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 0 8px;
  border: 1px solid lightgray;
  border-radius: 8px;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: normal;
  background-color: #f2ecfb;
`;

export const Basic = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  margin: 30px 0;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const PlanImage = styled.img`
  margin-top: 10px;
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Value = styled.span`
  margin-bottom: 8px;
  font-weight: bolder;
`;

export const Installments = styled.span`
  font-size: 10px;
`;

export const InstallmentValue = styled.span`
  font-size: 12px;
  font-weight: bolder;
`;

export const InstallmentNumber = styled.span`
  font-size: 12px;
  font-weight: bolder;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const Feature = styled.span`
  font-size: 12px;
  font-weight: normal;
  vertical-align: middle;
  color: rgb(0, 0, 0, 0.4);
`;
