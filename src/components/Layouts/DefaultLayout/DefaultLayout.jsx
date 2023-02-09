import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
