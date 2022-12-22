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
  {
    id: 'm5',
    name: 'Ramen',
    description: 'Japanese noodle soup',
    price: 20.99,
  },
];

export default function Menu() {
  const mealsList = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <MenuItem
      key={id}
      title={name}
      description={description}
      price={price}
      id={id}
    />
  ));

  return (
    <section>
      <MenuStyled>{mealsList}</MenuStyled>
    </section>
  );
}

const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid ${styles.color.primaryDark};
  border-bottom: 0;
  border-left: 0;
  align-items: center;
  justify-content: center;
  background-color: ${styles.color.primaryLight};
`;
