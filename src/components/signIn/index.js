import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';
import Button from './../forms/Button';
import GoogleLogo from './../../assets/google-logo.png';
import { signInWithGoogle, auth } from '../../firebase/utils';

import AuthWrapper from '../../components/authWrapper'
import FormInput from '../../components/forms/FormInput';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
            props.history.push('/');
        } catch (err) {
            //console.log(err);
        }
    }

    const configAuthWrapper = {
        headline: 'LogIn'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Correo electrónico"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Contraseña"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <Button type="submit">
                        Iniciar Sesión
                    </Button>
                    <div className="socialSignin">
                        <div className="row">
                            <Button onClick={signInWithGoogle}>
                                <img className="google-icon" src={GoogleLogo} alt="google logo">
                                </img>
                                Entrar con google
                            </Button>
                        </div>
                    </div>

                    <div className="links">
                        <Link to="/recovery">
                            Recuperar contraseña
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(SignIn);