import { useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import Api from '../../service/api';
import Table from '../../components/Table/Table';
import { TableData } from '../../components/Table/Table.interfaces';
import { useGlobalContext } from '../../hooks/globalContext';
import { VerifyPermissions } from '../../utils/utils';

const Users = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const context = useGlobalContext();

  const fetchUsers = async () => {
    const { data } = await Api.getUsers();
    setUserList(data);
    console.log(`returned users:`);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onClickUser = (userName: string) => {
    alert(`Campo clicado: ${userName}`);
  };

  const onRemoveUser = async (id: string) => {
    await Api.removeUser(id);
    setUserList(userList.filter((user) => user.id.toString() !== id));
    //TODO Tornar SystemMessages (toast) como componente q le parametro de array  de mensagens do Contexto global
    alert(`Usuário ${id} removido do banco`);
  };

  const mapTableData = (): TableData => {
    return {
      tableTitle: 'Tabela de Usuários',
      tableHader: Object.keys(userList[0]).map((key) => ({
        value: key,
      })),
      tableLines: userList.map((user) => {
        return {
          elements: (Object.keys(user) as Array<keyof User>).map(
            (cell: keyof User) => ({
              key: cell,
              // TODO: Formatar celulas especificas (perfil transformar id em valor)
              value: user[cell].toString(),
              click:
                user.perfil === 'cli'
                  ? () => {
                      onClickUser(user[cell].toString());
                    }
                  : undefined,
            })
          ),
          onEdit: VerifyPermissions(user.perfil, context.logged?.perfil)
            ? () => {
                onClickUser(`Editando usuario ${user.nome}`);
              }
            : undefined,
          onRemove: VerifyPermissions(user.perfil, context.logged?.perfil)
            ? () => {
                onRemoveUser(user.id.toString());
              }
            : undefined,
        };
      }),
    };
  };

  return (
    <div>
      {/* {userList.map((user) => (
        <p>
          <div>[{user.id}]</div>
          <div>{user.nome}</div>
          <div>{user.email}</div>
          <div>{user.perfil}</div>
        </p>
      ))} */}

      {userList.length && <Table tableData={mapTableData()} />}
    </div>
  );
};

export default Users;
