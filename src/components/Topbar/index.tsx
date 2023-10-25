import { useReducer } from 'react';

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
import { UserReducer } from '../../store/user';

const Topbar = () => {
  const [state, dispatch] = useReducer(UserReducer, {});
  let nav = useNavigate();
  let location = useLocation();

  const goTo = (route: Page) => {
    nav(mappedTabRoute[route].path);
  };

  const getTabs = () => {
    if (!state.user?.email)
      return Object.entries(mappedTabRoute).filter(
        (tab) => (tab as unknown as Page) !== 'CATALOGING'
      );
    return Object.entries(mappedTabRoute);
  };

  return (
    <Container>
      <ButtonArea>
        <SiteIcon />

        <Separator first />

        {getTabs().map(([entry, { name, path }]) => [
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
};

export default Topbar;
