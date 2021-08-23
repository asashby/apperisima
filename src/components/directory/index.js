import React from 'react';
import ShopMenImg from './../../assets/men.png';
import ShopWomenImg from './../../assets/women.png';
import './styles.scss';

const Directory = props => {
    return(
        <div
            className="directory">
            <div
                className="directory-wrapper">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomenImg})`
                    }}>
                    <a>
                        Mujeres
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMenImg})`
                    }}>
                    <a>
                        Hombres
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;