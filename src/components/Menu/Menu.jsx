import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMenu, status } from '../../api';
import styles from '../../styles';

import MenuItem from './MenuItem';

export default function Menu() {
  const [fetchedMenu, setFetchedMenu] = useState({
    menu: [],
    status: null,
  });

  useEffect(() => {
    getMenu(setFetchedMenu);
  }, []);

  const mealsList = fetchedMenu.menu.map(({ id, name, description, price }) => (
    <MenuItem
      key={id}
      title={name}
      description={description}
      price={price}
      id={id}
    />
  ));

  switch (fetchedMenu.status) {
    case status.pending:
      return (
        <MenuStyled>
          <Container>Loading...</Container>
        </MenuStyled>
      );
    case status.rejected:
      return (
        <MenuStyled>
          <Container>Something went wrong</Container>
        </MenuStyled>
      );
    case status.resolved:
      return (
        <section>
          <MenuStyled>{mealsList}</MenuStyled>
        </section>
      );
    default:
      return null;
  }
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

const Container = styled.h1`
  color: ${styles.color.primaryDark};
  font-size: 2rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
