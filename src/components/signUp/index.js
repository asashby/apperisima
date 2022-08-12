import React, { Component } from 'react';
import './styles.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../../components/forms/FormInput';
import Button from '../../components/forms/Button';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
};

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword, errors } = this.state;

        if(password !== confirmPassword) {
            const err = ['Las contraseñas no coinciden'];
            this.setState({
                errors: err
            });
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            this.setState({
                ...initialState
            });
        } catch (err) {
            // console.log(err);
        }
    }
    
    render(){
        const { displayName, email, password, confirmPassword, errors } = this.state;

        return (
            <div className='sign-up'>
                <div className='wrap'>
                    <h2>
                        Registrarse
                    </h2>

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
                    <div className="form-wrap">
                        <form onSubmit={this.handleFormSubmit}>
                            <FormInput
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Nombre completo"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Correo electrónico"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Contraseña"
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirma contraseña"
                                onChange={this.handleChange}
                            />
                            <Button type="submit">
                                Registrar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;