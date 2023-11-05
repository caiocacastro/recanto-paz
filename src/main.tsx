import React from 'react';
import ReactDOM from 'react-dom/client';
import Pages from './routes/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { SystemRoutes } from './interfaces/Routes.ts';
import Plans from './pages/Plans/Plans.tsx';
import About from './pages/About/About.tsx';
import Home from './pages/Home/Home.tsx';

const theme = createTheme({
  typography: {
    fontFamily: ['Varela Round'].join(','),
  },
});

const routeArray: SystemRoutes[] = [
  {
    path: '/',
    Component: Home,
    label: 'Inicial',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
  {
    path: '/plans',
    Component: Plans,
    needsAuthentication: true,
    label: 'Nossos Planos',
  },
  {
    path: '/about',
    Component: About,
    label: 'Sobre nós',
  },
];

const routes = createBrowserRouter([
  { path: '*', element: <Pages routeArray={routeArray} /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
