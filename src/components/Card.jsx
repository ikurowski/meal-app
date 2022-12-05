import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default function Card() {
  return (
    <CardStyled>
      <H1>Delicious Food, Delivered To You</H1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: ${styles.color.secondary};
  padding: 1rem;
  font-weight: 100;
  color: ${styles.color.textLight};
  text-align: center;
  width: 500px;
  border-radius: 1rem;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.75);
  & > p {
    margin: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;
