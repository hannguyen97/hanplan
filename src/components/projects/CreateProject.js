import React, { useState } from 'react';
import PropTypes from 'prop-types';


function CreateProject(props) {

  const [createproject, setCreateProject]=useState({
    title :'',
    content :''
  })
  function handleChange (e){
   
   
    setCreateProject((createproject) => ({ ...createproject, [e.target.id]: e.target.value }));
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("this state",createproject)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="content"> Project Content</label>
            <textarea  id="content" className="materialize-texarea" onChange={handleChange}></textarea>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
      
    </div>
  );
}

export default CreateProject;