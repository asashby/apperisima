import React, { Component} from 'react';
import './styles.scss';
import Button from './../forms/Button';
import GoogleLogo from './../../assets/google-logo.png';
import { signInWithGoogle } from '../../firebase/utils';

class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="sign-in">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>
                    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
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