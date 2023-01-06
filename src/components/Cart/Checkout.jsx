import React from 'react';
import styled from 'styled-components';

export default function Checkout() {
  return (
    <Form>
      <Label htmlFor="name">
        Name:
        <Input type="text" id="name" />
      </Label>
      <Label htmlFor="email">
        Email:
        <Input type="email" id="email" />
      </Label>
      <Label htmlFor="address">
        Address:
        <Input type="text" id="address" />
      </Label>
      <Label htmlFor="city">
        City:
        <Input type="text" id="city" />
      </Label>
      {/* <Button
        onClick={handleSubmit}
        moreStyles="font-weight: bold;"
        type="submit"
      >
        Checkout
      </Button> */}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid black;
`;
