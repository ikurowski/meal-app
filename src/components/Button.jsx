import React from 'react';
import styled from 'styled-components';

import styles from '../styles';

export default function Button({
  children,
  ariaLabel,
  padding = '1rem',
  fontSize = '1rem',
}) {
  return (
    <ButtonStyled
      type="button"
      aria-label={ariaLabel}
      padding={padding}
      fontSize={fontSize}
    >
      {children}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  background-color: ${styles.color.primaryDark};
  color: ${styles.color.textLight};
  padding: ${(props) => props.padding};
  border: none;
  border-radius: 0.5rem;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;
