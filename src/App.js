import './App.css';
import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />


        <Routes>
          <Route path='/' element={<Home titulo="Hello" />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
