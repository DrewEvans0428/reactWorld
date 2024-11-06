import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div>
           <Header />
           <main>{children}</main>
           <Footer /> 
        </div>
    )
}