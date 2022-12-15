import React, { useCallback } from 'react';
import styled from 'styled-components';
import styles from '../../styles';
import Button from '../Button';

export default function Cart({ hideModal }) {
  const DUMMY_CART = [
    {
      id: 'm1',
      name: 'Sushi',
      price: 22.99,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      price: 11.99,
    },
  ];

  const onClickHandler = useCallback(() => {
    hideModal();
  }, [hideModal]);

  const cartList = DUMMY_CART.map(({ id, name, price }) => (
    <CartItem key={id}>
      <div>
        <h3>{name}</h3>
        <p>{price} </p>
      </div>
      <Buttons>
        <button onClick={onClickHandler} aria-label="remove item" type="button">
          -
        </button>
        <button onClick={() => {}} aria-label="add item" type="button">
          +
        </button>
      </Buttons>
    </CartItem>
  ));

  return (
    <CartStyled>
      <CartList>{cartList}</CartList>
      <TotalAmount>
        <span>Total Amount</span>
        <span>$34.98</span>
      </TotalAmount>
      <Buttons>
        <Button
          onClick={hideModal}
          padding="0.5rem 2rem"
          moresStyles={`background-color: ${styles.color.secondary};`}
        >
          Close
        </Button>
        <Button padding="0.5rem 2rem">Order</Button>
      </Buttons>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  width: 90%;
  max-width: 30rem;
  max-height: 40rem;
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const CartList = styled.ul`
  list-style: none;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
