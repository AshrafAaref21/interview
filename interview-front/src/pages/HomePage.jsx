import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Sub>
        <Button
          style={{
            marginBottom: "2rem",
          }}
        >
          Home Page
        </Button>
        <ButtonContainer>
          <Button onClick={() => navigate("/details")}>Invoice Details</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Invoice List</Button>
        </ButtonContainer>
      </Sub>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
`;

const Sub = styled.div`
  align-content: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
