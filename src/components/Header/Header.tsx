import { HeaderProps } from "./Header.interfaces";
import { Container } from "./Header.styles";
import Account from "../Account/Account";
import Logo from "./components/Logo/Logo";
import TabOptions from "./components/TabOptions/TabOptions";

const Header = ({ routeArray }: HeaderProps) => {
  return (
    <Container>
      <Logo />
      <TabOptions routeArray={routeArray} />
      <Account />
    </Container>
  );
};

export default Header;
