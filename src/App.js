import React from "react";
import AppRoutes from './AppRoutes';
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import { Normalize } from 'styled-normalize'

function App() {
  return (
    <Theme>
      <Normalize />
      <GlobalStyle />
      <AppRoutes />
    </Theme>
  );
}

// IMPLEMENTAR TROCA DE PAGINA SEM CARREGAMENTO

export default App;