import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login';
import Header from './components/Header';
import Routes from './routes/';
import { BrowserRouter as Routers } from 'react-router-dom';

function App() {
  return (
    <Routers>
      <Header/>
      <Routes/>
      <GlobalStyles />
    </Routers>
  );
}

export default App;
