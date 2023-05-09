import './App.css';
import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Oi meninas :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Router>
        <Header />


        <Routes>
          <Route path='/' element={<Home titulo="Inicio" />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
>>>>>>> b503cfb9d63f9fadf12ab2a57f9a18043c105bca
    </div>
  );
}

export default App;
