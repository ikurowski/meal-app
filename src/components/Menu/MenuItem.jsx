/* eslint-disable styled-components-a11y/iframe-has-title */ // lib error
/* eslint-disable styled-components-a11y/html-has-lang */ // lib error
import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import styles from '../../styles';

// context
import CartContext from '../../store/CartContext';

// components
import Button from '../Button';
import Input from '../Input';

export default function MenuItem({ title, description, price, id }) {
  const { items, addItem } = useContext(CartContext);
  const refInputAmount = useRef();

  const priceFormatted = price.toFixed(2);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredRefNumber = Number(refInputAmount.current.value);

    const item = {
      price: priceFormatted,
      id,
      title,
      amount: enteredRefNumber,
    };
    addItem(item);
  };
  return (
    <MenuItemContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${priceFormatted}</Price>
      </div>
      <Form onSubmit={submitHandler}>
        <Input
          ref={refInputAmount}
          input={{
            id: `amount_${id}`,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
          label="Amount"
        />
        <Button
          type="submit"
          ariaLabel="add to cart"
          padding="0.3rem 2rem"
          fontSize="0.7rem"
          moresStyles="margin: .5rem auto;"
        >
          Add
        </Button>
      </Form>
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  & p {
    margin: 2px 0;
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
`;

const Price = styled.p`
  color: ${styles.color.secondaryDark};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
