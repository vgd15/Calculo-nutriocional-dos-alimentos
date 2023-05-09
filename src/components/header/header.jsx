import React from 'react';
import './Header.css';
import Links from '../links/links';
import abelha from '../../abelha.png';

function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerLogo'>
              <img src ={abelha} alt="imagem logo" width='90px'/> 
            </div>
            <div className='headerLinks'>
            <Links />
            </div>
        </div>
    );
}

export default Header;