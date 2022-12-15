import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { pixelToViewportWidth } from '../utils/utils';
import Button from './Button';

export default function Header({ showModal }) {
  const itemsInCart = <Badge>1</Badge>;
  return (
    <HeaderStyled>
      <Logo href=".">MealsUp</Logo>
      <Button onClick={showModal} ariaLabel="your cart">
        Your Cart {itemsInCart || null}
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
