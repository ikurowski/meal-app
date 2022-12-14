/* eslint-disable styled-components-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

export default function Input({ input, label }) {
  return (
    <Container>
      <Label htmlFor={input.id}>{label}</Label>
      <InputStyled
        type={input.type}
        id={input.id}
        min={input.min}
        max={input.max}
        step={input.step}
        defaultValue={input.defaultValue}
      />
    </Container>
  );
}

const Label = styled.label`
  font-weight: bold;
`;

const InputStyled = styled.input`
  width: 3rem;
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 0.2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
