import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { users } from '../../../assets/mock';
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

  useEffect(() => {
    setLoadedUsers(getUsers());
  }, []);

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
            rows={4}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descricao}
            error={Boolean(errors.descricao)}
            helperText={errors.descricao && errors.descricao}
            fullWidth
          />

          <FormControl
            style={{ width: '200px', marginBottom: '20px' }}
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
        </FormSubSection>
      </FormSection>

      <Separator />

      <FormSection>
        <FormSubSection label>Dados do Vendedor</FormSubSection>
        <FormSubSection>
          <FormControl
            fullWidth
            style={{ marginBottom: '20px' }}
            error={Boolean(errors.forma_pagamento)}
          >
            <InputLabel>Vendedor da Proposta</InputLabel>

            <Select
              id="forma_pagamento"
              name="forma_pagamento"
              label="Slecione o vendedor"
              onChange={handleChange}
              value={values.forma_pagamento}
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
            {errors.forma_pagamento && (
              <FormHelperText>{errors.forma_pagamento}</FormHelperText>
            )}
          </FormControl>
        </FormSubSection>
      </FormSection>
    </>
  );
}
