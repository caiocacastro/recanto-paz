import { Avatar, Button, Menu, MenuItem, Modal } from '@mui/material';
import {
  CloseButton,
  Container,
  Content,
  FormArea,
  Login,
  LoginField,
  LogoTitle,
  ModalContainer,
  ModalFieldArea,
  ModalImageArea,
  User,
} from './Account.styles';
import Api from '../../service/api';
import { HttpStatusCode } from 'axios';
import { MouseEvent, useContext, useState } from 'react';
import SystemMessages from '../SystemMessages/SystemMessages';
import { MyGlobalContext } from '../../hooks/globalContext';
import { Close } from '@mui/icons-material';

const Account = () => {
  const { logged, setLogged } = useContext(MyGlobalContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const doLogin = async () => {
    try {
      const ret = await Api.authenticate(user, password);
      if (ret.status === HttpStatusCode.Ok) setLogged(ret.data);
    } catch (e) {
      setShowError(true);
    }
  };

  const renderError = () => (
    <SystemMessages
      message={'Erro na autenticação. Tente mais tarde'}
      type="error"
      onClose={() => setShowError(false)}
      show={showError}
    />
  );

  const renderSuccess = () => (
    <SystemMessages
      message={'Autenticado com sucesso'}
      type="success"
      show={true}
    />
  );

  const handleAvatarClick = (event: MouseEvent<HTMLDivElement>) => {
    if (logged) {
      setAnchorEl(event.currentTarget);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const login = () => {
    doLogin();
    setShowModal(false);
  };

  const logout = () => {
    setLogged();
    handleCloseMenu();
  };

  return (
    <Container>
      {logged && renderSuccess()}
      {showError && renderError()}

      <Content onClick={handleAvatarClick}>
        <Avatar sx={{ width: 32, height: 32 }} alt="Faça seu login" />
        <User>{logged ? logged.nome : 'Login'}</User>
      </Content>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Meu Perfil</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <ModalImageArea></ModalImageArea>
          <ModalFieldArea>
            <CloseButton aria-label="close" onClick={() => setShowModal(false)}>
              <Close fontSize="small" color="disabled" />
            </CloseButton>

            <LogoTitle>Login</LogoTitle>

            <FormArea>
              <LoginField
                id="user"
                label="Usuário"
                placeholder="Digite seu email"
                variant="standard"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <LoginField
                id="password"
                label="Senha"
                placeholder="Digite sua senha"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <Login>
                <Button variant="contained" onClick={login}>
                  Logar
                </Button>
              </Login>
            </FormArea>
          </ModalFieldArea>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Account;
