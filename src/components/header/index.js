import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/apperisima-transparent.png';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {
    const { currentUser } = useSelector(mapState);
    
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
                        <ul> 
                            <li>
                                <Link to="/dashboard">
                                    Mi cuenta
                                </Link>
                            </li>
                            <li>
                                <p> | </p>
                            </li>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    Cerrar sesión
                                </span>
                            </li>
                        </ul>
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