import React from 'react';
import styled from 'styled-components';
import { pixelToViewportWidth } from '../utils/utils';
import styles from '../styles';

export default function Button({
  children,
  ariaLabel,
  padding = `${pixelToViewportWidth(10)} ${pixelToViewportWidth(30)}`,
  fontSize = '1rem',
  moreStyles,
  onClick,
  type,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      padding={padding}
      fontSize={fontSize}
      moreStyles={moreStyles}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${styles.color.primaryDark};
  color: ${styles.color.primaryLight};
  padding: ${(props) => props.padding};
  border: none;
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(props) => [props.moreStyles]}

  &:hover {
    scale: 1.1;
  }
`;
