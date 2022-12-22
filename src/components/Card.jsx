import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { pixelToViewportWidth } from '../utils/utils';

// components
import Button from './Button';

export default function Card({
  header,
  text,
  buttonText,
  backgroundColor = styles.color.secondary,
  moreStyles,
}) {
  return (
    <CardStyled moreStyles={moreStyles} backgroundColor={backgroundColor}>
      <H1>{header}</H1>
      <p>{text}</p>
      <Button>{buttonText}</Button>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  border: 0 solid ${styles.color.primaryDark};
  background-color: ${styles.color.secondary};
  font-weight: 500;
  color: ${styles.color.primaryDark};
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.moreStyles}

  & > p {
    margin: 1rem 0;
  }
`;

const H1 = styled.h1`
  font-size: ${pixelToViewportWidth(36)};
  font-weight: 700;
`;
