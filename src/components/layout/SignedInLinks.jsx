import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

SignedInLinks.propTypes = {
  
};

function SignedInLinks(props) {
  return (
    <div>
      <ul className="right">
        <li> <NavLink to="/create"> New project</NavLink></li>
        <li> <NavLink to="/"> Logout</NavLink></li>
        <li> <NavLink to="/" className="btn btn-floating pink lighten-1 "> HN</NavLink></li>
      </ul>
    </div>
  );
}

export default SignedInLinks;