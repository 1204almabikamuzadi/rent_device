import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router/index';

function Navbar() {
    return (
         <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="/">Home</a>
         <a className="navbar-brand" href="/about">About</a>
         <a className="navbar-brand" href="/contact">Contacts</a>
         </nav>
    );
}

export default Navbar;



