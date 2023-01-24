import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { FormProps, Profiles, UserFields } from '../../../model/forms';
import { FormSection, FormSubSection, Separator } from '../styled';

export default function UserForm({
  handleChange,
  handleBlur,
  values,
  errors,
}: FormProps<UserFields>) {
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
            error={Boolean(errors.nome)}
            helperText={errors.nome && errors.nome}
          />

          <TextField
            id="cpfcnpj"
            label="CPF/CNPJ"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpfcnpj}
            error={Boolean(errors.cpfcnpj)}
            helperText={errors.cpfcnpj && errors.cpfcnpj}
          />

          <TextField
            id="nascimento"
            label="Data Nascimento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nascimento}
            error={Boolean(errors.nascimento)}
            helperText={errors.nascimento && errors.nascimento}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Informações de Contato</FormSubSection>
        <FormSubSection>
          <TextField
            id="telefone"
            name="telefone"
            label="Telefone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.telefone}
            error={Boolean(errors.telefone)}
            helperText={errors.telefone && errors.telefone}
          />
          <TextField
            id="endereco"
            label="Endereço"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.endereco}
            error={Boolean(errors.endereco)}
            helperText={errors.endereco && errors.endereco}
          />
          <TextField
            id="cep"
            label="CEP"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cep}
            error={Boolean(errors.cep)}
            helperText={errors.cep && errors.cep}
          />
          <TextField
            id="cidade"
            label="Cidade"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cidade}
            error={Boolean(errors.cidade)}
            helperText={errors.cidade && errors.cidade}
          />
          <TextField
            id="estado"
            label="Estado"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.estado}
            error={Boolean(errors.estado)}
            helperText={errors.estado && errors.estado}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Tipo de Usuário</FormSubSection>
        <FormSubSection>
          <FormControl
            style={{ width: '200px' }}
            error={Boolean(errors.perfil)}
          >
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
            {errors.perfil && <FormHelperText>{errors.perfil}</FormHelperText>}
          </FormControl>
        </FormSubSection>
      </FormSection>
    </>
  );
}
