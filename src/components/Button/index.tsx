import { Button as DefaultButton, Icon } from '@mui/material';
import { ArrowBack, Check, Close, Delete } from '@mui/icons-material';
import styled from 'styled-components';

type Props = {
  buttonTitle: string;
  type: 'back' | 'confirm' | 'delete' | 'remove';
  onClick: () => void;
};

const MuiButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  border-radius: 8px !important;
  padding: 12px 10px !important;
  margin: 8px !important;
`;

const MuiIcon = styled(Icon)`
  display: flex;
  margin-right: 5px;
`;

export default function Button({ buttonTitle, type, onClick }: Props) {
  const renderIcon = () => {
    switch (type) {
      case 'confirm':
        return <Check />;
      case 'remove':
        return <Close />;
      case 'delete':
        return <Delete />;
      case 'back':
      default:
        return <ArrowBack />;
    }
  };

  return (
    <MuiButton
      onClick={onClick}
      variant={['back', 'remove'].includes(type) ? 'outlined' : 'contained'}
    >
      <MuiIcon style={{ display: 'flex' }}>{renderIcon()}</MuiIcon>
      {buttonTitle}
    </MuiButton>
  );
}

// Button.defaultProps = {
//   buttonTitle: '',
//   type: 'back',
// };

// export default Button;
