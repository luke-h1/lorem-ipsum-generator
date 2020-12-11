import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
    </>
  );
}

export default App;
