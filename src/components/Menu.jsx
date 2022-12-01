import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <MenuStyled>
      <MenuItem
        title="Sushi"
        description="Finest fish and veggies"
        price={22.99}
      />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 1rem 2rem;
  background-color: ${styles.color.light};
  border-radius: 1rem;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.75);
`;
