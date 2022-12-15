import React from 'react';
import styled from 'styled-components';
import img from '../assets/meal.jpg';
import { pixelToViewportWidth } from '../utils/utils';

// components
import Card from './Card';
import Menu from './Menu/Menu';

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
  margin: ${pixelToViewportWidth(32)};
  gap: ${pixelToViewportWidth(30)};
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${pixelToViewportWidth(480)};
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 60%;
  }
`;
