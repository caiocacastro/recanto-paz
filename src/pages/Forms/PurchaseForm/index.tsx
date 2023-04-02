import { TextField } from '@mui/material';
import { FormProps, PurchaseFields } from '../../../model/forms';
import { FormSection, FormSubSection, Separator } from '../styled';

export default function PurchaseForm({
  handleBlur,
  handleChange,
  values,
  errors,
}: FormProps<PurchaseFields>) {
  return (
    <>
      <FormSection>
        <FormSubSection label>Informações de Compra</FormSubSection>
        <FormSubSection>
          <TextField
            id="gaveta"
            name="gaveta"
            label="Gaveta Comprada"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gaveta}
            error={Boolean(errors.gaveta)}
            helperText={errors.gaveta && errors.gaveta}
          />

          <TextField
            id="adiquirente"
            name="adiquirente"
            label="Adiquirente"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.adiquirente}
            error={Boolean(errors.adiquirente)}
            helperText={errors.adiquirente && errors.adiquirente}
          />

          <TextField
            id="data"
            name="data"
            label="Data da Compra"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.data}
            error={Boolean(errors.data)}
            helperText={errors.data && errors.data}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Informações Documentais</FormSubSection>
        <FormSubSection>
          <TextField
            id="contrato"
            name="contrato"
            label="Número do Contrato"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contrato}
            error={Boolean(errors.contrato)}
            helperText={errors.contrato && errors.contrato}
          />

          <TextField
            id="registro_cartoral"
            name="registro_cartoral"
            label="Registro Cartoral"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.registro_cartoral}
            error={Boolean(errors.registro_cartoral)}
            helperText={errors.registro_cartoral && errors.registro_cartoral}
          />

          <TextField
            id="proposta"
            name="proposta"
            label="Proposta Nro."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.proposta}
            error={Boolean(errors.proposta)}
            helperText={errors.proposta && errors.proposta}
          />
        </FormSubSection>
      </FormSection>
    </>
  );
}
