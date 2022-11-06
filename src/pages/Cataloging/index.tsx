import React, { useState } from 'react';
import { FormType } from '../../model/forms';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Work from '@mui/icons-material/Work';
import RequestPage from '@mui/icons-material/RequestPage';
import Church from '@mui/icons-material/Church';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import HistoryEdu from '@mui/icons-material/HistoryEdu';
import PostAdd from '@mui/icons-material/PostAdd';

import CardButton from '../../components/CardButton';
import { Container, Content, PageTitle } from '../styled';

import Form from '../Forms';
import { ContainerOptions } from './styled';

export default function Cataloging() {
  const [form, setForm] = useState<FormType>();

  const renderOptions = () => (
    <ContainerOptions>
      <CardButton
        option="Novo usuário"
        subOption="Cadastre um novo usuario do sistema"
        icon={PersonAddIcon}
        onClick={() => setForm('user')}
      />
      <CardButton
        option="Nova gaveta"
        subOption="Cadastre uma nova gaveta no sistema"
        icon={Work}
        onClick={() => setForm('grave')}
      />
      <CardButton
        option="Nova aquisição"
        subOption="Cadastre uma nova aquisição de um serviço no sistema"
        icon={RequestPage}
        onClick={() => setForm('purchase')}
      />
      <CardButton
        option="Novo óbito"
        subOption="Cadastre um novo óbito no sistema"
        icon={Church}
        onClick={() => setForm('passing')}
      />
      <CardButton
        option="Novo contrato"
        subOption="Cadastre um novo contrato firmado no sistema"
        icon={HistoryEdu}
        onClick={() => setForm('contract')}
      />
      <CardButton
        option="Novo pagamento"
        subOption="Cadastre um novo pagamento realizado no sistema"
        icon={ReceiptLong}
        onClick={() => setForm('payment')}
      />
      <CardButton
        option="Nova proposta"
        subOption="Cadastre uma nova proposta no sistema"
        icon={PostAdd}
        onClick={() => setForm('proposal')}
      />
    </ContainerOptions>
  );

  const handleCancel = () => setForm(undefined);
  const handleSave = () => setForm(undefined);

  const renderForm = () =>
    form && <Form type={form} onCancel={handleCancel} onSave={handleSave} />;

  const renderPage = () => {
    switch (form) {
      case undefined:
        return renderOptions();
      default:
        return renderForm();
    }
  };

  return (
    <Container>
      {/* <Content>
        <PageTitle>Novo Cadastro</PageTitle>
        <Content>Escolha uma das opções para cadastro</Content>
      </Content> */}
      <Content>{renderPage()}</Content>
    </Container>
  );
}
