import Topbar from "../components/Topbar";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function App() {
  // let navigate = useNavigate();

  const handleNavigate = (route: string) => {
    // navigate(route);
  };

  return (
    <BrowserRouter>
      <Topbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
