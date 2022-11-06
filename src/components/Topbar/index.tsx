import {
  Container,
  Separator,
  ButtonArea,
  CustomButtom as Button,
} from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

import User from '../../components/User';
import SiteIcon from '../../components/SiteIcon';
import { mappedTabRoute, Page } from '../../model/pages';

export default function Topbar() {
  let nav = useNavigate();
  let location = useLocation();

  const goTo = (route: Page) => {
    nav(mappedTabRoute[route].path);
  };

  return (
    <Container>
      <ButtonArea>
        <SiteIcon />

        <Separator first />

        {Object.entries(mappedTabRoute).map(([entry, { name, path }]) => [
          <Button
            selected={location.pathname === path}
            onClick={() => goTo(entry as Page)}
          >
            {name}
          </Button>,
          <Separator />,
        ])}
      </ButtonArea>
      <User />
    </Container>
  );
}
