import React, { useEffect } from 'react';
import './header.css';
import Links from '../links/links';
import logoPreview from './logo-preview.png';
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";

function Header() {
    useEffect(() => {
        const cliqueMenu = document.getElementById('menu-mobile-open');
        const menuBurger = document.getElementById('header-mobile');
        const menuClose = document.querySelector('.header-x');

        console.log('menuBurger:', menuBurger);
        console.log('menuClose:', menuClose);

        if (cliqueMenu && menuBurger && menuClose) {
            const handleClickMenu = () => {
                menuBurger.classList.add('open');
                console.log('Adicionado: open');
            };

            const handleClickMenuClose = () => {
                console.log('Clicado no botão de fechamento');
                menuBurger.classList.remove('open');
                console.log('Removido: open');
            };

            cliqueMenu.addEventListener('click', handleClickMenu);
            menuClose.addEventListener('click', handleClickMenuClose);

            return () => {
                cliqueMenu.removeEventListener('click', handleClickMenu);
                menuClose.removeEventListener('click', handleClickMenuClose);
            };
        }

    }, []);

    return (
        <div className="header">
            <div className="icon-menu-mobile" id="menu-mobile-open">
                <IoIosMenu />
            </div>
            <div className='headerContainer'>
                <div className='headerLogo'>
                    <img src={logoPreview} alt="imagem logo" width='300px' />
                </div>
                <div className='headerLinks'>
                    <Links />
                </div>
            </div>
            <div className='header-mobile' id="header-mobile">
                <div className='geral-header-mobile d-flex justify-content-between'>
                    <div className='headerLogo'>
                        <img src={logoPreview} alt="imagem logo" width='300px' />
                    </div>
                    <div className='header-x'>
                        <IoIosCloseCircleOutline />
                    </div>
                </div>
                <div className='headerLinks'>
                    <Links />
                </div>
            </div>
        </div>
    );
}

export default Header;
