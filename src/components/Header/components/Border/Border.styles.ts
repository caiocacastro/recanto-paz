import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Divider = styled.div<{ location: 'before' | 'after' }>`
  height: 50px;
  width: 50px;
  background-color: gray;
  background-image: radial-gradient(
    ${({ location }) =>
      location === 'before' ? 'at bottom right' : 'at top right'},
    #fff 70%,
    transparent 0%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
