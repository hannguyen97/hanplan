import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

Navbar.propTypes = {
  
};

function Navbar(props) {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link  to='/' className="brand-logo">Han Plan</Link>
            <SignedInLinks></SignedInLinks>
            <SignedOutLinks></SignedOutLinks>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;