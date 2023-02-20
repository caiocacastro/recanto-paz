import { FileUpload } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  Icon,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import styled from 'styled-components';
import { ContractFields, Contratos, FormProps } from '../../../model/forms';
import {
  FormImageSection,
  FormSection,
  FormSubSection,
  FileArea,
} from '../styled';

export default function ContractForm({
  handleChange,
  handleBlur,
  values,
  errors,
}: FormProps<ContractFields>) {
  console.log(errors);
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

            {values.imagem ? (
              <span>{values.imagem}</span>
            ) : (
              <span style={{ opacity: 0.3 }}>
                Envie o contrato digitalizado
              </span>
            )}
          </FileArea>

          <FormControl
            style={{ width: '300px', marginBottom: '20px' }}
            error={Boolean(errors.tipo)}
          >
            <InputLabel>Tipo do Contrato</InputLabel>

            <Select
              id="tipo"
              name="tipo"
              label="Selecione a tipo"
              onChange={handleChange}
              value={values.tipo}
            >
              {Object.entries(Contratos).map(([c, value]) => (
                <MenuItem value={c} onBlur={handleBlur} onChange={handleChange}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.tipo && <FormHelperText>{errors.tipo}</FormHelperText>}
          </FormControl>
        </FormImageSection>
      </FormSection>
    </>
  );
}
