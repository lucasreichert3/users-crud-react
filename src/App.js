import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Contexts from './contexts/Contexts';
import './App.css'

function App() {
  return (
    <Contexts>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Contexts>
    
  );
}

export default App;
