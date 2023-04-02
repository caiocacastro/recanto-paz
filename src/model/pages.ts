import React, { FunctionComponent } from 'react';
import Cataloging from '../pages/Cataloging';
import Form from '../pages/Forms';
import Home from '../pages/Home';

export type Page = 'HOME' | 'CATALOGING';

type PageRouteType = { path: string; comp: FunctionComponent; name: string };

export const mappedTabRoute: {
  [key in Page]: PageRouteType;
} = {
  HOME: { path: '/', comp: Home, name: 'Início' },
  CATALOGING: { path: '/cadastro', comp: Cataloging, name: 'Cadastro' },
};

Object.entries(mappedTabRoute);
