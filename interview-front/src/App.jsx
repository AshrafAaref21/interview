import styled from "styled-components";

import Button from "./ui/Button";
import { useState } from "react";
import DetailsForm from "./ui/DetailsForm";

function App() {
  const [showDetails, setShowDetails] = useState(false);
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
          <Button onClick={() => setShowDetails((state) => !state)}>
            Invoice Details
          </Button>
        </ButtonContainer>
        {showDetails && <DetailsForm />}
        <ButtonContainer>
          <Button>Invoice List</Button>
        </ButtonContainer>
      </Sub>
    </Container>
  );
}

export default App;

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
