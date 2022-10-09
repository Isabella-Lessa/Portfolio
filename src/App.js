import React from "react";
import Rotas from '../src/services/Rotas.js';
import { GlobalStyle } from './global/style';

export default function App(){
  return(
    <>
      <Rotas/>
      <GlobalStyle/>
    </>
  )
}