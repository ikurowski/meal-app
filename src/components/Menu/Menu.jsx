import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMenu } from '../../api';
import styles from '../../styles';

import MenuItem from './MenuItem';

export default function Menu() {
  const [fetchMenu, setFetchMenu] = useState({
    menu: [],
    state: null,
  });

  useEffect(() => {
    getMenu(setFetchMenu);
  }, []);

  const mealsList = fetchMenu.menu.map(({ id, name, description, price }) => (
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
