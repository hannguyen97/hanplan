import React from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { useSelector } from 'react-redux';

Dashbroad.propTypes = {
  
};

function Dashbroad(props) {

  return (
    <div className="dashbroad container">
      <div className="row">
         <div className="col s12 m6 ">
         <ProjectList/>
         </div>
         <div className="col s12 m5 offset-1"></div>
         <Notifications/>
        
      </div>
      
    </div>
  );
}

export default Dashbroad;