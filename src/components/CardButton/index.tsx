import React from 'react';
import { Container, OptionName, OptionSubName, OptionIcon } from './styled';

type Props = {
  option: string;
  subOption?: string;
  icon: React.FunctionComponent;
  onClick?: () => void;
};

export default function CardButton({
  option,
  subOption,
  icon: Icon,
  onClick,
}: Props) {
  return (
    <Container onClick={onClick}>
      {Icon && (
        <OptionIcon>
          <Icon />
        </OptionIcon>
      )}
      <OptionName>{option}</OptionName>
      <OptionSubName>{subOption}</OptionSubName>
    </Container>
  );
}
