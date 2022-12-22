import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import CartProvider from './store/CartProvider';

// components
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Cart/Modal';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalIsVisible(false);
  };

  return (
    <CartProvider>
      <GlobalStyle />
      <Header showModal={showModal} />
      <Main />
      {modalIsVisible ? <Modal hideModal={hideModal} /> : null}
    </CartProvider>
  );
}

export default App;
