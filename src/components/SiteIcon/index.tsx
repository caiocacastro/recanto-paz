import React from 'react';
import { Icon } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';
import { Theme } from '../../model/style';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 8px;
  border: 1px solid ${Theme.primaryLightColor};
  border-radius: 100px;

  > span > svg {
    color: ${Theme.primaryLightColor};
  }
`;

export default function SiteIcon() {
  return (
    <Container>
      <Icon>
        <AccessibilityNewIcon />
      </Icon>
    </Container>
  );
}
