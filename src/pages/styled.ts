import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: scroll;
  margin: 60px 10px 10px;
  height: 100vh;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 20px;
  width: 100%;
  text-align: start;
  margin-bottom: 20px;
  flex: 1;
`;

export const PageTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 10px 0 5px;
`;
