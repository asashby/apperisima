import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/apperisima-transparent.png'

const Header = props => {
    return(
        <header className="main-header">
            <div className="wrapper">
                <div className="logo-wrapper">
                    <Link className="logo-link" to="/" title="Inicio">
                        <img src={Logo} 
                            alt="Apperisima">
                        </img>
                    </Link>
                </div>

                <div className="actions">
                    <ul>
                        <li>
                            <Link to="/register">
                                Registrarse
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    );
}

export default Header;