import {
  Basic,
  Container,
  Feature,
  Features,
  InstallmentNumber,
  InstallmentValue,
  Installments,
  PlanImage,
  Prices,
  Title,
  Value,
} from "./PlanCard.styles";
import { PlanCardProps } from "./PlanCard.interfaces";

const PlanCard = ({ plan }: PlanCardProps) => {
  const formatNumberToMoney = (numb: number) => numb.toFixed(2).replace(".", ",");

  return (
    <Container>
      <Basic>
        <Title>{plan.name}</Title>
        <PlanImage
          src={`http://localhost:3000${plan.imageUrl}`}
          height={100}
          width={100}
        />
        <Prices>
          <Value>R$ {formatNumberToMoney(plan.value)}</Value>
          <Installments>
            {`em `}
            <InstallmentNumber>{plan.maxInstallmentNumber}x</InstallmentNumber>
            {` de `}
            <InstallmentValue>
              R$ {formatNumberToMoney(plan.maxInstallmentValue)}
            </InstallmentValue>
          </Installments>
        </Prices>
      </Basic>

      <Features>
        {plan.features.map((f) => (
          <Feature>{f.name},</Feature>
        ))}
      </Features>
    </Container>
  );
};

export default PlanCard;
