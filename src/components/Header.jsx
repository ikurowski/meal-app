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
      background-color: ${styles.color.secondary};
    }
    33% {
      background-color: ${styles.color.tetriary};
    }
    66% {
      background-color: ${styles.color.quaternary};
    }
    100% {
      background-color: ${styles.color.primaryDark};
    }
`;

const bumpAnimation = css`
  animation: ${bump} 300ms ease-out;
`;

export default function Header({ showModal }) {
  const [animationOn, setAnimationOn] = useState(false);
  const cartContext = useContext(CartContext);
  const numberOfMealsInCart = cartContext.items.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return undefined;
    }
    setAnimationOn(true);

    const timer = setTimeout(() => {
      setAnimationOn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const itemsInCart = <Badge>{numberOfMealsInCart}</Badge>;

  return (
    <HeaderStyled>
      <Logo href=".">Meal Me</Logo>
      <Button
        onClick={showModal}
        ariaLabel="your cart"
        type="button"
        moreStyles={[
          animationOn && bumpAnimation,
          'height: 100%;',
          `border-left: 2px solid ${styles.color.primaryDark};`,
        ]}
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
  height: ${pixelToViewportWidth(70)};
  background-color: ${styles.color.primaryLight};
  border: 2px solid ${styles.color.primaryDark};
`;

const Logo = styled.a`
  color: ${styles.color.primaryDark};
  font-size: ${pixelToViewportWidth(48)};
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  margin-left: 1rem;
`;

const Badge = styled.span`
  background-color: ${styles.color.secondary};
  color: ${styles.color.textLight};
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
  margin-left: 0.5rem;
`;
