import { useContext } from 'react';
import { MyGlobalContext } from '../../hooks/globalContext';

const Home = () => {
  const { logged } = useContext(MyGlobalContext);

  if (!logged) return <>Please log in</>;

  return (
    <p>
      <div>[{logged.id}]</div>
      <div>{logged.nome}</div>
      <div>{logged.email}</div>
    </p>
  );
};

export default Home;
