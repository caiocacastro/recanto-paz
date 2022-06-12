import { Container, Separator, ButtonArea } from "./styled";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import User from "../../components/User";

export default function Topbar() {
  let nav = useNavigate();

  const goTo = (route: "ABOUT" | "HOME") => {
    switch (route) {
      default:
      case "HOME":
        nav("/");
        break;
      case "ABOUT":
        nav("/about");
    }
  };

  return (
    <Container>
      <ButtonArea>
        <Button onClick={() => goTo("HOME")}>Início</Button>
        <Separator />
        <Button onClick={() => goTo("ABOUT")}>Sobre</Button>
      </ButtonArea>

      <User />
    </Container>
  );
}
