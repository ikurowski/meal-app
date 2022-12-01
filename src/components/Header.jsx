import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import Button from './Button';

export default function Header() {
  return (
    <HeaderStyled>
      <Logo href=".">MealsUp</Logo>
      <Button ariaLabel="your cart">Your Cart</Button>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: ${styles.color.secondary};
`;

const Logo = styled.a`
  color: ${styles.color.textLight};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;
