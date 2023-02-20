import {
  Container,
  Form as FormTag,
  FormActions,
  FormTitle,
  Separator,
  FormFields,
} from './styled';
import {
  DrawerFields,
  FormFieldsType,
  FormType,
  mappedFormName,
  PaymentFields,
  PurchaseFields,
  UserFields,
} from '../../model/forms';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './UserForm';
import DrawerForm from './DrawerForm';
import PurchaseForm from './PurchaseForm';
import { PassingFields } from '../../model/forms/passing';
import PassingForm from './PassingForm';
import { ContractFields } from '../../model/forms/contract';
import ContractForm from './ContractForm';
import PaymentForm from './PaymentForm';
import ProposalForm from './ProposalForm';
import { ProposalFieds } from '../../model/forms/proposal';

type Props = {
  type: FormType;
  onCancel: () => void;
  onSave: () => void;
};

export default function Form({ type, onCancel, onSave }: Props) {
  let initialValues: FormFieldsType;
  let validationSchema;

  // Yup.setLocale({
  //   number: {

  //   }
  // });

  const getFields = () => {
    switch (type) {
      case 'proposal':
        initialValues = {} as ProposalFieds;
        validationSchema = Yup.object({
          descricao: Yup.string(),
          forma_pagamento: Yup.string().required('Campo Obrigatório'),
          parcelamento: Yup.number().when(
            ['forma_pagamento'],
            (forma_pagamento, schema) => {
              return forma_pagamento === 'parcelado'
                ? schema.required('Campo Obrigatório')
                : schema;
            }
          ),
          valor: Yup.number().required('Campo Obrigatório'),
          vendedor: Yup.string().required('Campo Obrigatório'),
        });
        break;
      case 'payment':
        initialValues = {} as PaymentFields;
        validationSchema = Yup.object({
          contrato: Yup.string().required('Campo Obrigatório'),
          valor: Yup.number().required('Campo Obrigatório'),
          data: Yup.date().default(() => new Date()),
          nota: Yup.string(),
        });
        break;
      case 'contract':
        initialValues = {} as ContractFields;
        validationSchema = Yup.object({
          tipo: Yup.string().required('Campo Obrigatório'),
          imagem: Yup.string(),
        });
        break;
      case 'passing':
        initialValues = {} as PassingFields;
        validationSchema = Yup.object({
          gaveta: Yup.number().required('Campo Obrigatório'),
          nome: Yup.number().required('Campo Obrigatório'),
          data: Yup.number().required('Campo Obrigatório'),
        });
        break;
      case 'purchase':
        initialValues = {} as PurchaseFields;
        validationSchema = Yup.object({
          gaveta: Yup.number().required('Campo Obrigatório'),
          adiquirente: Yup.number().required('Campo Obrigatório'),
          registro_cartoral: Yup.number().required('Campo Obrigatório'),
          contrato: Yup.string().required('Campo Obrigatório'),
          proposta: Yup.string().required('Campo Obrigatório'),
          data: Yup.string().required('Campo Obrigatório'),
        });
        break;
      case 'drawer':
        initialValues = {} as DrawerFields;
        validationSchema = Yup.object({
          largura: Yup.number().required('Campo Obrigatório'),
          altura: Yup.number().required('Campo Obrigatório'),
          profundidade: Yup.number().required('Campo Obrigatório'),
          bloco: Yup.string().required('Campo Obrigatório'),
          linha: Yup.string().required('Campo Obrigatório'),
          coluna: Yup.number()
            .integer('Deve ser um inteiro')
            .required('Campo Obrigatório'),
        });
        break;
      case 'user':
      default:
        initialValues = {
          perfil: 'customer',
        } as UserFields;
        validationSchema = Yup.object({
          nome: Yup.string().required('Campo Obrigatório'),
          cpfcnpj: Yup.string().required('Campo Obrigatório'),
          telefone: Yup.string().required('Campo Obrigatório'),
          endereco: Yup.string().required('Campo Obrigatório'),
          cep: Yup.string().required('Campo Obrigatório'),
          cidade: Yup.string().required('Campo Obrigatório'),
          estado: Yup.string().max(2).required('Campo Obrigatório'),
          nascimento: Yup.date().required('Campo Obrigatório'),
          perfil: Yup.string().required('Campo Obrigatório'),
        });
        break;
    }

    return useFormik({
      initialValues,
      validationSchema,
      onSubmit: (val) => {
        console.log(val);
        onSave();
      },
    });
  };

  let {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    submitForm,
  } = getFields();

  const renderFields = () => {
    switch (type) {
      case 'proposal':
        return (
          <ProposalForm
            values={values as ProposalFieds}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'payment':
        return (
          <PaymentForm
            values={values as PaymentFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'contract':
        return (
          <ContractForm
            values={values as ContractFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'passing':
        return (
          <PassingForm
            values={values as PassingFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'drawer':
        return (
          <DrawerForm
            values={values as DrawerFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'purchase':
        return (
          <PurchaseForm
            values={values as PurchaseFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      case 'user':
        return (
          <UserForm
            values={values as UserFields}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
          />
        );
      default:
        return <>No Form Selected</>;
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
