import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import styles from '../styles';
import { pixelToViewportWidth } from '../utils/utils';

// context
import CartContext from '../store/CartContext';

// components
import Button from './Button';

const bump = keyframes`
   0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
`;

const bumpAnimation = css`
  animation: ${bump} 300ms ease-out;
`;

export default function Header({ showModal }) {
  const [animation, setAnimation] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfMealsInCart = cartContext.items.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return undefined;
    }
    setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const itemsInCart = <Badge>{numberOfMealsInCart}</Badge>;

  return (
    <HeaderStyled>
      <Logo href=".">MealsUp</Logo>
      <Button
        onClick={showModal}
        ariaLabel="your cart"
        moresStyles={animation && bumpAnimation}
      >
        Your Cart {cartContext.items.length ? itemsInCart : null}
      </Button>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelToViewportWidth(16)} ${pixelToViewportWidth(48)};
  background-color: ${styles.color.secondary};
`;

const Logo = styled.a`
  color: ${styles.color.textLight};
  font-size: ${pixelToViewportWidth(32)};
  font-weight: bold;
  text-decoration: none;
`;

const Badge = styled.span`
  background-color: ${styles.color.secondary};
  color: ${styles.color.textLight};
  padding: 0.2rem 0.7rem;
  border-radius: 25px;
  margin-left: 0.5rem;
`;
