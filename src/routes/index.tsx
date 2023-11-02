import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Api from "../service/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import About from "../pages/About/About";
import Plans from "../pages/Plans/Plans";
import { SystemRoutes } from "../interfaces/Routes";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { MyGlobalContext } from "../hooks/globalContext";
import { User } from "../interfaces/User";

const Page = styled.div`
  display: flex;
  flex: 1;
  margin: 8px 0;
  flex-direction: column;
`;

const Pages = () => {
  const [logged, setLogged] = useState<User>();

  const routeArray: SystemRoutes[] = useMemo(
    (): SystemRoutes[] => [
      {
        path: "/",
        element: <Home logged />,
        label: "Inicial",
      },
      {
        path: "/plans",
        element: <Plans />,
        needsAuth: true,
        label: "Nossos Planos",
      },
      { path: "/about", element: <About />, label: "Sobre nós" },
    ],
    []
  );

  const fetchUsers = async () => {
    const { data } = await Api.getUsers();
    console.log(`returned users ${data}`);
  };

  const getRoutes = useCallback(
    () => (logged ? routeArray : routeArray.filter((r) => !r.needsAuth)),
    [logged, routeArray]
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MyGlobalContext.Provider value={{ logged, setLogged }}>
      <Header routeArray={getRoutes()} />
      <Routes>
        {routeArray.map((r) => (
          <Route path={r.path} element={<Page>{r.element}</Page>} />
        ))}
      </Routes>
    </MyGlobalContext.Provider>
  );

  // return (
  //   <Router location={""} navigator={undefined}>
  //     <TabOptions logged routeArray={routeArray} />
  //     <RouterProvider router={routes} />
  //   </Router>
  // );
};

export default Pages;
