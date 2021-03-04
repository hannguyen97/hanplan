import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ProjectSummary.propTypes = {
  project : PropTypes.array,
};
ProjectSummary.defaultProps={
  project : []
}
function ProjectSummary(props) {
  const projects = useSelector(state => state.projects.projects);
  
  return (
   <div>
     
       {projects && projects.map(project => (
          <div className="card a-depth-0 project-summary" key={project.id}>
           <div className="card-content  grey-text text-darken-3" >
           <span className="card-title">{project.title}</span>
           <p>{project.content}</p>
           <p className="grey-text">3rd September, 2am</p>
         </div>
         </div>
         
       ))}
  </div>
 
  );
}

export default ProjectSummary;