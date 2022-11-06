import styled from 'styled-components';
import { Theme } from '../../model/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  padding: 10px 30px;
  border: 1px solid ${Theme.primaryDarkColor}33;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
  max-width: 50%;
  /* height: 60%; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Separator = styled.div`
  height: 2px;
  width: 100%;
  border-radius: 8px;
  margin: 10px 0px;
  background-color: ${Theme.secondaryDarkColor};
`;

export const FormTitle = styled.div`
  text-transform: capitalize;
  font-size: 24px;
  margin: 20px 0px;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

type SubSectionProps = {
  label?: boolean;
};

export const FormSubSection = styled.div<SubSectionProps>`
  display: flex;
  flex: ${({ label }) => (label ? 1 : 2)};
  flex-wrap: wrap;

  > div {
    margin: 5px;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

export const FormActions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
