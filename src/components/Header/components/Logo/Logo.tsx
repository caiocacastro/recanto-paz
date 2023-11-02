import { CardTravel } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 50px;
`;

const Logo = () => {
  return (
    <Container>
      <IconButton>
        <CardTravel color="action" />
      </IconButton>
    </Container>
  );
};

export default Logo;
