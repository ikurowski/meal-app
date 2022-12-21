/* eslint-disable styled-components-a11y/label-has-for */
import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ input, label }, ref) => (
  <Container>
    <Label htmlFor={input.id}>{label}</Label>
    <InputStyled
      ref={ref}
      type={input.type}
      id={input.id}
      min={input.min}
      max={input.max}
      step={input.step}
      defaultValue={input.defaultValue}
    />
  </Container>
));

export default Input;

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
