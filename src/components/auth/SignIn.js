import React, { useState } from 'react';
import PropTypes from 'prop-types';


function SignIn(props) {

  const [inputs, setInputs]=useState({
    email :'',
    password :''
  })
  function handleChange (e){
   
   
    setInputs((inputs) => ({ ...inputs, [e.target.id]: e.target.value }));
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("this state",inputs)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
      
    </div>
  );
}

export default SignIn;