import { useEffect, useState } from "react";
import Api from "../../service/api";
import { Plan } from "../../interfaces/Plan";
import PlanCard from "./components/PlanCard/PlanCard";
import { Container, Content } from "./Plans.styles";

const Plans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const fetchPlans = async () => {
    try {
      const retPlans = await Api.getPlans();
      setPlans(retPlans.data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <Container>
      <Content>Conheça nossos planos</Content>

      <Content>
        {plans.map((plan) => (
          <PlanCard plan={plan} />
        ))}
      </Content>
    </Container>
  );
};

export default Plans;
