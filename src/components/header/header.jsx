import React from 'react';
import './header.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Contato from '../../pages/Contato';
import Links from '../links/links';
import abelha from '../../abelha.png';

function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerLogo'>
              <img src ={abelha} alt="imagem logo" width='90px'/> 
            </div>
            <div className='headerLinks'>
                <Router>
                    <Links />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contato' element={<Contato />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default Header;