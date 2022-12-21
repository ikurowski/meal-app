import React, { useContext } from 'react';
import styled from 'styled-components';
import styles from '../../styles';

// context
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

// components
import Button from '../Button';

export default function Cart({ hideModal }) {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const totalAmountFormatted = totalAmount.toFixed(2);
  const hasItems = totalAmount > 0;
  const cartList = items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      addItem={addItem}
      removeItem={removeItem}
    />
  ));

  return (
    <CartStyled>
      <ul>{cartList}</ul>
      <TotalAmount>
        <span>Total Amount</span>
        <span>{totalAmountFormatted}</span>
      </TotalAmount>
      <Buttons>
        <Button
          onClick={hideModal}
          padding="0.5rem 2rem"
          moresStyles={`background-color: ${styles.color.secondary};`}
        >
          Close
        </Button>
        {hasItems ? <Button padding="0.5rem 2rem">Order</Button> : null}
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
