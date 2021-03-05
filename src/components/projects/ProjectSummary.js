import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


ProjectSummary.propTypes = {
  project : PropTypes.array,
};
ProjectSummary.defaultProps={
  project : []
}
function ProjectSummary(props) {
    const { project } = props;
    console.log("",project)
  return (
   <div>
     
       {project && project.map(project => (
         <Link to={'/project/' + project.id}>
           <div className="card a-depth-0 project-summary" key={project.id}>
           <div className="card-content  grey-text text-darken-3" >
           <span className="card-title">{project.title}</span>
           <p>{project.content}</p>
           <p className="grey-text">3rd September, 2am</p>
         </div>
         </div>
         </Link>
         
       ))}
  </div>
 
  );
}

export default ProjectSummary;