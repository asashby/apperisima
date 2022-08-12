import React, { Component } from 'react';
import SignUp from '../../components/signUp';
import './styles.scss';

class Registration extends Component {

    render(){
        return (
            <div className='registration-wrapper'>
                <SignUp />
            </div>
        );
    }
}

export default Registration;