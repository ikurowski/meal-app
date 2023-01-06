import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { postOrder, status } from '../../api';
import styles from '../../styles';

// context
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

// components
import Button from '../Button';
import Checkout from './Checkout';

export default function Cart({ hideModal }) {
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [postStatus, setPostStatus] = useState(null);

  const orderHandler = (event) => {
    event.preventDefault();
    setIsCheckout(true);
  };
  const checkoutHandler = (userData) => {
    postOrder(items, userData, setPostStatus);
    clearCart();
  };

  const totalAmountFormatted = totalAmount.toFixed(2);
  const hasItems = items.length > 0;
  const cartList = items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      addItem={addItem}
      removeItem={removeItem}
    />
  ));

  const emptyCart = <H3>Your cart is empty</H3>;
  const cartWithItems = (
    <>
      <ul>{cartList}</ul>
      <TotalAmount>
        <span>Total Amount</span>
        <span>${totalAmountFormatted}</span>
      </TotalAmount>
    </>
  );

  const modalButtons = (
    <Buttons>
      <Button onClick={hideModal} padding="0.5rem 2rem">
        Close
      </Button>
      {hasItems ? (
        <Button type="submit" padding="0.5rem 2rem" onClick={orderHandler}>
          Order
        </Button>
      ) : null}
    </Buttons>
  );
  switch (postStatus) {
    case status.pending:
      return (
        <CartStyled>
          <H3>Sending order ...</H3>
        </CartStyled>
      );
    case status.rejected:
      return (
        <CartStyled>
          <H3>Something went wrong!</H3>
          <Button
            onClick={hideModal}
            padding="0.5rem 2rem"
            moreStyles="display: block; margin: 0 auto;"
          >
            Close
          </Button>
        </CartStyled>
      );
    case status.resolved:
      return (
        <CartStyled>
          <H3>Successfully sent the order!</H3>
          <Button
            onClick={hideModal}
            padding="0.5rem 2rem"
            moreStyles="display: block; margin: 0 auto;"
          >
            Close
          </Button>
        </CartStyled>
      );
    default:
      return (
        <CartStyled>
          {hasItems ? cartWithItems : emptyCart}
          {isCheckout && (
            <Checkout onCancelClick={hideModal} onCheckout={checkoutHandler} />
          )}
          {!isCheckout && modalButtons}
        </CartStyled>
      );
  }
}

const CartStyled = styled.div`
  width: 90%;
  max-width: 30rem;
  max-height: 40rem;
  background-color: white;
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

const H3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  margin: 2rem 0;
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
