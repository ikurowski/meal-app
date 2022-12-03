/* eslint-disable styled-components-a11y/iframe-has-title */
/* eslint-disable styled-components-a11y/html-has-lang */
import React from 'react';
import styled from 'styled-components';
import styles from '../../styles';
import Button from '../Button';

export default function MenuItem({ title, description, price }) {
  return (
    <MenuItemContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{`$${price}`}</Price>
      </div>
      <Container>
        <AmountContainer>
          <Amount>Amount</Amount>
          <Input type="number" />
        </AmountContainer>
        <Button
          type="button"
          ariaLabel="add to cart"
          padding="0.3rem 1rem"
          fontSize="0.7rem"
          moresStyles="margin: .5rem auto;"
        >
          Add
        </Button>
      </Container>
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  & p {
    margin: 2px 0;
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
`;

const Price = styled.p`
  color: ${styles.color.secondaryDark};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Amount = styled.h3`
  font-weight: 600;
`;

const Input = styled.input`
  width: 2rem;
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 0.2rem;
`;
