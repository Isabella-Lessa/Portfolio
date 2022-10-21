import React, { useState } from 'react';
import Rotas from './services/Rotas';
import { GlobalStyle } from './global/style';

export default function App() {

  return(
    <>
      <GlobalStyle/>
      <Rotas/>
    </>
  )
}