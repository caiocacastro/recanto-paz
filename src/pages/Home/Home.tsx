import { HomeConfigInterface } from "./Home.interfaces";

const Home = ({ logged: isAuth, users }: HomeConfigInterface) => {
  if (!isAuth) return <>Please log in</>;
  return users?.map((user) => (
    <p>
      <div>[{user.id}]</div>
      <div>{user.nome}</div>
      <div>{user.email}</div>
    </p>
  ));
};

export default Home;
