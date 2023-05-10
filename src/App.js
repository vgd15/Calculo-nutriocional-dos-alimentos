import './App.css';
import React from 'react';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Formulario from './components/formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       
        <Formulario/>

        <Routes>
          <Route path='/' element={<Home titulo="Home" />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
