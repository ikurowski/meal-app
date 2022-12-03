import React from 'react';
import styled from 'styled-components';
import styles from '../../styles';

import MenuItem from './MenuItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function Menu() {
  return (
    <MenuStyled>
      {DUMMY_MEALS.map(({ id, name, description, price }) => (
        <MenuItem
          key={id}
          title={name}
          description={description}
          price={price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.ul`
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
