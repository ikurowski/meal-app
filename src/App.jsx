import React, { useState } from 'react';
import GlobalStyle from './globalStyles';

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
    <>
      <GlobalStyle />
      <Header showModal={showModal} />
      <Main />
      {modalIsVisible ? <Modal hideModal={hideModal} /> : null}
    </>
  );
}

export default App;
