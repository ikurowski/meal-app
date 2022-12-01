/* eslint-disable styled-components-a11y/iframe-has-title */
/* eslint-disable styled-components-a11y/html-has-lang */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function MenuItem({ title, description, price }) {
  return (
    <MenuContainer>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{`$${price}`}</p>
      </div>
      <div>
        <AmountContainer>
          <h3>Amount</h3>
          <Input type="number" />
        </AmountContainer>
        <ButtonStyled>Add</ButtonStyled>
      </div>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  width: 2rem;
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 0.2rem;
`;

const ButtonStyled = styled.button(
  <Button ariaLabel="add to cart" padding="0.5rem" fontSize="0.6rem" />,
)`
  margin: 30rem;
`;
