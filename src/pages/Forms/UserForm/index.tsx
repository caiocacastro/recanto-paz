import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Profiles } from '../../../model/forms';
import { FormSection, FormSubSection, Separator } from '../styled';
import { FormikHandlers } from 'formik';

type FormProps = {
  handleChange: any;
  handleBlur: any;
  values: UserFields;
};

type UserFields = {
  nome: string;
  telefone: string;
  cpfcnpj: string;
  endereco: string;
  cep: string;
  cidade: string;
  estado: string;
  nascimento: string;
  perfil: string;
};

export default function UserForm({
  handleChange,
  handleBlur,
  values,
}: FormProps) {
  return (
    <>
      <FormSection>
        <FormSubSection label>Informaçoes Pessoais</FormSubSection>
        <FormSubSection>
          <TextField
            id="nome"
            label="Nome Completo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nome}
          />

          <TextField
            id="cpfcnpj"
            label="CPF/CNPJ"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpfcnpj}
          />

          <TextField
            id="nascimento"
            label="Data Nascimento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nascimento}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Informações de Contato</FormSubSection>
        <FormSubSection>
          <TextField
            id="telefone"
            label="Telefone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.telefone}
          />
          <TextField
            id="endereco"
            label="Endereço"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.endereco}
          />
          <TextField
            id="cep"
            label="CEP"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cep}
          />
          <TextField
            id="cidade"
            label="Cidade"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cidade}
          />
          <TextField
            id="estado"
            label="Estado"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.estado}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Tipo de Usuário</FormSubSection>
        <FormSubSection>
          <FormControl style={{ width: '200px' }}>
            <InputLabel>Perfil do Usuário</InputLabel>

            <Select
              id="perfil"
              name="perfil"
              label="Selecione o perfil"
              onChange={handleChange}
              value={values.perfil}
            >
              {Object.entries(Profiles).map(([p, value]) => (
                <MenuItem value={p} onBlur={handleBlur} onChange={handleChange}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormSubSection>
      </FormSection>
    </>
  );
}
