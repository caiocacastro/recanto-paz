import { Container, Divider } from './Border.styles';

const Border = () => {
  return (
    <Container>
      <Divider location="before" />
      <Divider location="after" />
    </Container>
  );
};

export default Border;
