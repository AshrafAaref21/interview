import styled from "styled-components";

function DetailsForm() {
  return (
    <FormContainer>
      <Header>Invoice Details Page</Header>
      <div>
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="unit">Unit No</label>
        <input type="number" id="unit" />
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="">Quantity</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="">Total</label>
        <input type="number" disabled={true} />
      </div>
      <div>
        <label htmlFor="">Expiry Date</label>
        <input type="date" />
      </div>
      <ButtonsContainer>
        <button type="submit">save</button>
        <button type="reset">new</button>
        <button>back</button>
        <button type="submit">delete</button>
      </ButtonsContainer>
    </FormContainer>
  );
}

export default DetailsForm;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.6rem;
`;

const FormContainer = styled.div`
  width: 80%;
  margin: auto;
  border: 0.1rem solid black;
`;

const Header = styled.h2`
  color: white;
  background-color: #0077b6;
  text-align: center;
  height: 2.5rem;
  align-content: center;
`;
