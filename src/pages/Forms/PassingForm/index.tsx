import { TextField } from '@mui/material';
import { FormProps } from '../../../model/forms';
import { PassingFields } from '../../../model/forms/passing';
import { FormSection, FormSubSection } from '../styled';

export default function PassingForm({
  handleBlur,
  handleChange,
  values,
  errors,
}: FormProps<PassingFields>) {
  return (
    <>
      <FormSection>
        <FormSubSection label>Informações da Morte</FormSubSection>
        <FormSubSection>
          <TextField
            id="gaveta"
            name="gaveta"
            label="Gaveta Utilizada"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gaveta}
            error={Boolean(errors.gaveta)}
            helperText={errors.gaveta && errors.gaveta}
          />

          <TextField
            id="nome"
            name="nome"
            label="Nome do Falecido"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nome}
            error={Boolean(errors.nome)}
            helperText={errors.nome && errors.nome}
          />

          <TextField
            id="data"
            name="data"
            label="Data do Falecimento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.data}
            error={Boolean(errors.data)}
            helperText={errors.data && errors.data}
          />
        </FormSubSection>
      </FormSection>
    </>
  );
}
