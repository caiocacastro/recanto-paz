import { FileUpload } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { contracts } from '../../../assets/mock';
import { Tokens } from '../../../model/constants';
import { ContractFields, FormProps, PaymentFields } from '../../../model/forms';
import {
  FormImageSection,
  FormSection,
  FormSubSection,
  FileArea,
} from '../styled';

export default function PaymentForm({
  values,
  errors,
  handleChange,
  handleBlur,
}: FormProps<PaymentFields>) {
  console.log(errors);

  const [loadedContracts, setLoadedContracts] = useState<ContractFields[]>([]);

  const getContracts = (): ContractFields[] => contracts;

  useEffect(() => {
    setLoadedContracts(getContracts());
  }, []);

  return (
    <>
      <FormSection>
        <FormImageSection>
          <FileArea
            elevation={0}
            sx={{
              height: '300px',
              width: '400px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <FileUpload
              sx={{ fontSize: '100px', opacity: '0.3', marginBottom: '10px' }}
            />

            {values.nota ? (
              <span>{values.nota}</span>
            ) : (
              <span style={{ opacity: 0.3 }}>Envie a nota digitalizado</span>
            )}
          </FileArea>

          <FormControl
            style={{ width: '300px', marginBottom: '20px' }}
            error={Boolean(errors.tipo)}
          >
            <InputLabel>Selecione o Contrato</InputLabel>

            <Select
              id="contrato"
              name="contrato"
              label="Selecione a contrato"
              onChange={handleChange}
              value={values.contrato}
            >
              {loadedContracts.map((u) => (
                <MenuItem
                  value={u.tipo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  {u.tipo}
                </MenuItem>
              ))}
            </Select>
            {errors.contrato && (
              <FormHelperText>{errors.contrato}</FormHelperText>
            )}
          </FormControl>

          <TextField
            id="valor"
            name="valor"
            label="Valor do Pagamento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.valor}
            error={Boolean(errors.valor)}
            helperText={errors.valor && errors.valor}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            style={{ width: Tokens.MediumFieldWidth }}
          />

          <TextField
            id="data"
            name="data"
            label="Data do Pagamento"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.data}
            error={Boolean(errors.data)}
            helperText={errors.data && errors.data}
            style={{ width: Tokens.MediumFieldWidth }}
          />
        </FormImageSection>
      </FormSection>
    </>
  );
}
