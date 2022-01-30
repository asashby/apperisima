import React from 'react';
import GithubIcon from './../../assets/github-logo.png';
import './styles.scss';

const Footer = props => {
    return(
        <footer className="footer">
            <div className="wrapper">
                <p>
                    Ashby Hernandez |
                </p>
                <div className='github-info-wrapper'>
                    <img className='github-img' src={GithubIcon} alt='github'>
                    </img>
                    <a className='github-link' href='https://github.com/asashby' target='_blank'>
                        Checkout my github profile!
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;