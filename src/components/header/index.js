import React from 'react';
import './styles.scss'

import Logo from './../../assets/apperisima-transparent.png'

const Header = props => {
    return(
        <header
            className="main-header">
            <div
                className="wrapper">
                <div
                    className="logo-wrapper">
                    <a
                        className="logo-link"
                        href="/"
                        title="Inicio">
                        <img 
                            src={Logo}
                            alt="Apperisima">
                        </img>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;