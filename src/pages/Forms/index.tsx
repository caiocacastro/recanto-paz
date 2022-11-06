import {
  Container,
  Form as FormTag,
  FormActions,
  FormTitle,
  Separator,
  FormFields,
} from './styled';
import React from 'react';
import { FormType, mappedFormName } from '../../model/forms';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './UserForm';

type Props = {
  type: FormType;
  onCancel: () => void;
  onSave: () => void;
};

export default function Form({ type, onCancel, onSave }: Props) {
  const getFields = () => {
    switch (type) {
      case 'user':
      default:
        return useFormik({
          initialValues: {
            nome: '',
            telefone: '',
            cpfcnpj: '',
            endereco: '',
            cep: '',
            cidade: '',
            estado: '',
            nascimento: '',
            perfil: 'customer',
          },
          validationSchema: Yup.object({
            nome: Yup.string(),
            cpfcnpj: Yup.string(),
          }),
          onSubmit: (val) => {
            console.log(val);
            onSave();
          },
        });
    }
  };

  let { handleSubmit, handleChange, handleBlur, values, submitForm } =
    getFields();

  const renderFields = () => {
    switch (type) {
      case 'grave':
        return <></>;
      case 'user':
      default:
        return (
          <UserForm
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        );
    }
  };

  return (
    <Container>
      <FormTag onSubmit={handleSubmit}>
        <FormTitle>Cadastro de {mappedFormName[type]}</FormTitle>

        <Separator />

        <FormFields>{renderFields()}</FormFields>

        <Separator />

        <FormActions>
          <Button buttonTitle="Cancelar" onClick={onCancel} type="remove" />
          <Button buttonTitle="Salvar" type="confirm" onClick={submitForm} />
        </FormActions>
      </FormTag>
    </Container>
  );
}
