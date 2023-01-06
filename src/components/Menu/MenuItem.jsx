import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import styles from '../../styles';

// context
import CartContext from '../../store/CartContext';

// components
import Button from '../Button';
import Input from '../Input';

export default function MenuItem({ title, description, price, id }) {
  const { addItem } = useContext(CartContext);
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
          moreStyles="margin: .5rem auto;"
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
  border-bottom: 2px solid ${styles.color.primaryDark};
  padding: 10px;

  &:last-child {
    border-bottom: none;
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
