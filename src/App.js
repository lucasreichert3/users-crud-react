import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
