import { Route, Routes } from 'react-router-dom';
import Api from '../service/api';
import { useCallback, useEffect, useState } from 'react';
import { SystemRoutes } from '../interfaces/Routes';
import Header from '../components/Header/Header';
import { MyGlobalContext } from '../hooks/globalContext';
import { User } from '../interfaces/User';

interface SystemRouteProps {
  routeArray: SystemRoutes[];
}

const Pages = ({ routeArray }: SystemRouteProps) => {
  const [logged, setLogged] = useState<User>();

  const fetchUsers = async () => {
    const { data } = await Api.getUsers();
    console.log(`returned users ${data}`);
  };

  const getRoutes = useCallback(
    () =>
      logged ? routeArray : routeArray.filter((r) => !r.needsAuthentication),
    [logged, routeArray]
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <MyGlobalContext.Provider value={{ logged, setLogged }}>
        <Header routeArray={getRoutes()} />
        <Routes>
          {getRoutes().map(({ path, Component }) => (
            <Route path={path} Component={Component} />
          ))}
        </Routes>
      </MyGlobalContext.Provider>
    </>
  );
};

export default Pages;
