import React from 'react';
import Router from "./Router";
import { createGlobalStyle } from "styled-components";

import Home from './routes/Home';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
