import React from 'react';
import styled from 'styled-components';
import img from '../assets/meal.jpg';

// components
import Card from './Card';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled>
      <Card />
      <Menu />
    </MainStyled>
  );
}
const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh; //FIXME

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 50vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 60%;
  }
`;
