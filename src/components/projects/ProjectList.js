import React from 'react';
import ProjectSummary from './ProjectSummary';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


ProjectList.propTypes = {
  projects : PropTypes.array,
};
ProjectList.defaultProps={
  projects : []
}

function ProjectList(props) {
  const  {projects} = props;
  console.log("project list" , projects)
  return (
    <div className="project-list section">
          <ProjectSummary project={projects} />
         
      
    </div>
  );
}

export default ProjectList;