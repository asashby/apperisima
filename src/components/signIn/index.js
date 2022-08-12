import React, { Component} from 'react';
import './styles.scss';
import Button from './../forms/Button';
import GoogleLogo from './../../assets/google-logo.png';
import { signInWithGoogle, auth } from '../../firebase/utils';

import FormInput from '../../components/forms/FormInput';

const initialSate = {
    email: '',
    password: ''
};

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialSate
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialSate
            });
        } catch (err) {
            //console.log(err);
        }
    }
    
    render(){

        const { email, password } = this.state;
        return(
            <div className="sign-in">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>
                    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Correo electrónico"
                                handleChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Contraseña"
                                handleChange={this.handleChange}
                            />
                            <Button type="submit">
                                Iniciar sesión
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;