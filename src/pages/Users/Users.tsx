import { useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import Api from '../../service/api';
import Table from '../../components/Table/Table';
import { TableData } from '../../components/Table/Table.interfaces';

const Users = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const fetchUsers = async () => {
    const { data } = await Api.getUsers();
    setUserList(data);
    console.log(`returned users ${data}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onClickUser = (userName: string) => {
    alert(`Campo clicado: ${userName}`);
  };

  const mapTableData = (): TableData => {
    return {
      tableTitle: 'Tabela de Usuários',
      tableHader: Object.keys(userList[0]).map((key) => ({
        value: key,
      })),
      tableLines: userList.map((user) => {
        return (Object.keys(user) as Array<keyof User>).map(
          (cell: keyof User) => ({
            key: cell,
            // TODO: Formatar celulas especificas (perfil transformar id em valor)
            value: user[cell].toString(),
            click: () => {
              onClickUser(user[cell].toString());
            },
          })
        );
      }),
    };
  };

  return (
    <div>
      {userList.map((user) => (
        <p>
          <div>[{user.id}]</div>
          <div>{user.nome}</div>
          <div>{user.email}</div>
          <div>{user.perfil}</div>
        </p>
      ))}

      {userList.length && <Table tableData={mapTableData()} />}
    </div>
  );
};

export default Users;
