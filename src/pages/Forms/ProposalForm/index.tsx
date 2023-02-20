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
import { ValidationError } from 'yup';
import { users } from '../../../assets/mock';
import { Tokens } from '../../../model/constants';
import { FormProps, UserFields } from '../../../model/forms';
import { FormasPagamento, ProposalFieds } from '../../../model/forms/proposal';
import { FormSection, FormSubSection, Separator } from '../styled';

export default function ProposalForm({
  handleBlur,
  handleChange,
  values,
  errors,
}: FormProps<ProposalFieds>) {
  const getUsers = (): UserFields[] => users;

  const [loadedUsers, setLoadedUsers] = useState<UserFields[]>([]);
  const {
    SmallFieldWidth,
    MediumFieldWidth,
    LargeFieldWidth,
    MediumBottomMargin,
  } = Tokens;

  useEffect(() => {
    setLoadedUsers(getUsers());
  }, []);

  console.log(errors);

  return (
    <>
      <FormSection>
        <FormSubSection label>Informações de Proposta</FormSubSection>
        <FormSubSection>
          <TextField
            id="descricao"
            name="descricao"
            label="Descrição da Proposta"
            multiline
            rows={6}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descricao}
            error={Boolean(errors.descricao)}
            helperText={errors.descricao && errors.descricao}
            fullWidth
          />

          <FormControl
            style={{ minWidth: MediumFieldWidth }}
            error={Boolean(errors.forma_pagamento)}
          >
            <InputLabel>Forma de Pagamento</InputLabel>

            <Select
              id="forma_pagamento"
              name="forma_pagamento"
              label="Selecione o pagamento"
              onChange={handleChange}
              value={values.forma_pagamento}
            >
              {Object.entries(FormasPagamento).map(([p, value]) => (
                <MenuItem value={p} onBlur={handleBlur} onChange={handleChange}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.forma_pagamento && (
              <FormHelperText>{errors.forma_pagamento}</FormHelperText>
            )}
          </FormControl>

          <TextField
            style={{ width: MediumFieldWidth }}
            id="valor"
            name="valor"
            label="Valor"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.valor}
            error={Boolean(errors.valor)}
            helperText={errors.valor && errors.valor}
          />

          {values.forma_pagamento === 'parcelado' && (
            <FormControl
              style={{ width: LargeFieldWidth }}
              error={
                Boolean(errors.parcelamento) &&
                Boolean(values.forma_pagamento === 'parcelado')
              }
            >
              <InputLabel>Nro. de Parcelas</InputLabel>

              <Select
                id="parcelamento"
                name="parcelamento"
                label="Nro de parcelas"
                onChange={handleChange}
                value={values.parcelamento}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((p) => (
                  <MenuItem
                    value={p}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {p} {p !== 1 ? 'vezes' : 'vez'} de R${' '}
                    {values.valor
                      ? (values.valor / p).toFixed(2).replace('.', ',')
                      : '0,00'}
                  </MenuItem>
                ))}
              </Select>
              {errors.parcelamento && (
                <FormHelperText>{errors.parcelamento}</FormHelperText>
              )}
            </FormControl>
          )}
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Dados do Vendedor</FormSubSection>
        <FormSubSection>
          <FormControl
            fullWidth
            style={{ marginBottom: MediumBottomMargin }}
            error={Boolean(errors.vendedor)}
          >
            <InputLabel>Vendedor da Proposta</InputLabel>

            <Select
              id="vendedor"
              name="vendedor"
              label="Swlecione o vendedor"
              onChange={handleChange}
              value={values.vendedor}
            >
              {loadedUsers.map((u) => (
                <MenuItem
                  value={u.nome}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  {u.nome}
                </MenuItem>
              ))}
            </Select>
            {errors.vendedor && (
              <FormHelperText>{errors.vendedor}</FormHelperText>
            )}
          </FormControl>
        </FormSubSection>
      </FormSection>
    </>
  );
}
