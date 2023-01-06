import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// components
import Cart from './Cart';

const portalElement = document.getElementById('overlay');

function Backdrop({ hideModal }) {
  const backdropClickHandler = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        hideModal();
      }
    },
    [hideModal],
  );

  return (
    <BackdropStyled onClick={backdropClickHandler}>
      <Cart hideModal={hideModal} />
    </BackdropStyled>
  );
}

export default function Modal({ hideModal }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, portalElement)}
    </>
  );
}

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
