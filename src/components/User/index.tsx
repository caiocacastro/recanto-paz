import { Icon } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container, Component } from "./styled";

export default function User() {
  return (
    <Container>
      <Component>
        <Icon>
          <AccountCircle />
        </Icon>
      </Component>
      <Component>Usuario</Component>
    </Container>
  );
}
