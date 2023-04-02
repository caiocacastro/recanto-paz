import Topbar from '../components/Topbar';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mappedTabRoute } from '../model/pages';
import React, { createElement } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 60px; */
  height: 100vh;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Container>
        <Routes>
          {Object.entries(mappedTabRoute).map(([r, { path, comp }]) => (
            <Route path={path} element={createElement(comp)} />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
