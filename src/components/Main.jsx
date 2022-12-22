import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { pixelToViewportWidth } from '../utils/utils';

// components
import Card from './Card';
import Menu from './Menu/Menu';

export default function Main() {
  return (
    <MainStyled>
      <Container>
        <Card
          header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          buttonText="Lorem ipsum"
          moreStyles={[
            'flex: 1;',
            'border-right-width: 2px;',
            `color: ${styles.color.primaryLight};`,
            `padding: ${pixelToViewportWidth(10, 1024)} ${pixelToViewportWidth(
              10,
              1024,
            )};`,
          ]}
        />
        <Menu />
      </Container>
      <Container2>
        <Card
          header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          buttonText="Lorem ipsum"
          backgroundColor={styles.color.tetriary}
          moreStyles={[
            'height: 50%;',
            'border-bottom-width: 2px;',
            `padding: ${pixelToViewportWidth(30)} ${pixelToViewportWidth(
              100,
            )};`,
          ]}
        />
        <Card
          header="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          backgroundColor={styles.color.quaternary}
          buttonText="Lorem ipsum"
          moreStyles={[
            'height: 50%;',
            `padding: ${pixelToViewportWidth(30)} ${pixelToViewportWidth(
              100,
            )};`,
          ]}
        />
      </Container2>
    </MainStyled>
  );
}
const MainStyled = styled.main`
  display: flex;
  border: 2px solid ${styles.color.primaryDark};
  border-top: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;
