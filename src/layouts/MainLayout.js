import React from 'react';
import Header from './../components/header';
import Footer from './../components/footer';

const MainLayout = props => {
    return(
        <div className="full-height">
            <Header />
            <div className="main-wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;