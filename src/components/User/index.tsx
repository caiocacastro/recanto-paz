import { Dialog, DialogActions, Icon, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Container,
  Component,
  LoginTitle,
  LoginContent,
  LoginField,
  LoginLabel,
} from './styled';
import { RootState } from 'store';
import { useState } from 'react';
import Button from '../../components/Button';
import { Tokens } from '../../model/constants';

const mapStateToProps = ({ session: { user } }: RootState) => ({ user });

type Props = {} & ReturnType<typeof mapStateToProps>;

const User = ({ user }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container onClick={() => setShow(!show)}>
        <Component>
          <Icon>
            <AccountCircle />
          </Icon>
        </Component>
        <Component>{user ? user.name : 'Logar'}</Component>
      </Container>

      <Dialog
        open={show}
        onClose={() => setShow(!show)}
        maxWidth="sm"
        fullWidth={true}
      >
        <LoginTitle>Logue no sistema</LoginTitle>
        <LoginContent>
          <LoginField row>
            <LoginLabel>Usuário</LoginLabel>
            <TextField
              name="usuario"
              variant="standard"
              placeholder="Digite seu usuário"
              style={{ width: Tokens.LargeFieldWidth }}
            />
          </LoginField>

          <LoginField row>
            <LoginLabel>Senha</LoginLabel>
            <TextField
              name="password"
              type="password"
              variant="standard"
              placeholder="digite sua senha"
              style={{ width: Tokens.LargeFieldWidth }}
            />
          </LoginField>
        </LoginContent>

        <DialogActions>
          <Button
            type="back"
            buttonTitle="Cancelar"
            hideIcon
            onClick={() => setShow(!show)}
          />
          <Button
            type="confirm"
            buttonTitle="Acessar o Sistema"
            hideIcon
            onClick={() => setShow(!show)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default User;
