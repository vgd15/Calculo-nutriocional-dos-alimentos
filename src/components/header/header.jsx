import React from 'react';
import './Header.css';
import Links from '../links/links';
import logoPreview from './logo-preview.png';

function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerLogo'>
              <img src ={logoPreview} alt="imagem logo" width='300px'/> 
            </div>
            <div className='headerLinks'>
            <Links />
            </div>
        </div>
    );
}

export default Header;