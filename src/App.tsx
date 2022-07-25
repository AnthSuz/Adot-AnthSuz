import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Modal } from '@mui/material';
import { StoreContext, defaultState } from './stores/store';
import { CardContainer } from './components/CardContainer';

function App() {
  console.log('defaultState', defaultState)  
  return (
      <StoreContext.Provider value={defaultState}>
        <CardContainer />
      </StoreContext.Provider>
  );
}

export default App;
