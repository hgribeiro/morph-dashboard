import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import { AppProvider } from './hooks/index';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
