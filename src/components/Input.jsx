import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { pixelToViewportWidth } from '../utils/utils';

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
  width: ${pixelToViewportWidth(50)};
  font-size: ${pixelToViewportWidth(12)};
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
