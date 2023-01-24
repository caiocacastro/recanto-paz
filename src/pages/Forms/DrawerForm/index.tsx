import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Blocos, DrawerFields, FormProps, Linhas } from '../../../model/forms';
import { FormSection, FormSubSection, Separator } from '../styled';

export default function DrawerForm({
  handleBlur,
  handleChange,
  values,
  errors,
}: FormProps<DrawerFields>) {
  return (
    <>
      <FormSection>
        <FormSubSection label>Dimensões</FormSubSection>
        <FormSubSection>
          <TextField
            id="altura"
            name="altura"
            label="Altura da Gaveta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.altura}
            error={Boolean(errors.altura)}
            helperText={errors.altura && errors.altura}
          />

          <TextField
            id="largura"
            label="Largura da Gaveta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.largura}
            error={Boolean(errors.largura)}
            helperText={errors.largura && errors.largura}
          />

          <TextField
            id="profundidade"
            label="Profundidade da Gaveta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.profundidade}
            error={Boolean(errors.profundidade)}
            helperText={errors.profundidade && errors.profundidade}
          />
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Localização</FormSubSection>

        <FormSubSection>
          <FormControl style={{ width: '100px' }} error={Boolean(errors.bloco)}>
            <InputLabel>Bloco</InputLabel>
            <Select
              id="bloco"
              name="bloco"
              label="Selecione o bloco"
              onChange={handleChange}
              value={values.bloco}
            >
              {Object.entries(Blocos).map(([b, value]) => (
                <MenuItem value={b} onBlur={handleBlur} onChange={handleChange}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.bloco && <FormHelperText>{errors.bloco}</FormHelperText>}
          </FormControl>

          <FormControl style={{ width: '100px' }} error={Boolean(errors.linha)}>
            <InputLabel>Linha</InputLabel>
            <Select
              id="linha"
              name="linha"
              label="Selecione a linha"
              onChange={handleChange}
              value={values.linha}
            >
              {Object.entries(Linhas).map(([l, value]) => (
                <MenuItem value={l} onBlur={handleBlur} onChange={handleChange}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.linha && <FormHelperText>{errors.linha}</FormHelperText>}
          </FormControl>

          <TextField
            id="coluna"
            label="Coluna"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.coluna}
            style={{ width: '100px' }}
            error={Boolean(errors.coluna)}
            helperText={errors.coluna && errors.coluna}
          />
        </FormSubSection>
      </FormSection>
    </>
  );
}
