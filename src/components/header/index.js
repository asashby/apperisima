import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/apperisima-transparent.png'

const Header = props => {
    const { currentUser } = props;
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
                    {currentUser && (
                        <div> 
                            <img src={currentUser.photoURL} alt='Perfil'>
                            </img>
                            <p onClick={() => auth.signOut()}>
                                Cerrar sesión
                            </p>
                        </div>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/register">
                                    Registrarse
                                </Link>
                            </li>
                            <li>
                                <p> | </p>
                            </li>
                            <li>
                                <Link to="/login">
                                    Entrar
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

Header.defaultProps = {
    currentUser: null
};

export default Header;