import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import AuthWrapper from '../authWrapper';
import FormInput from '../../components/forms/FormInput';
import Button from '../../components/forms/Button';

const SignUp = props => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            const err = ['Las contraseñas no coinciden'];
            setErrors(err);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            reset();
            props.history.push('/');
        } catch (err) {
            // console.log(err);
        }
    }

    const configAuthWrapper = {
        headline: 'Registrarse'
    };
    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="form-wrap">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Nombre completo"
                        handleChange={e => setDisplayName(e.target.value)}
                    />
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
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirma contraseña"
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Button type="submit">
                        Registrar
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(SignUp);