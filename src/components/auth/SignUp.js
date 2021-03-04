import React, { useState } from 'react';
import PropTypes from 'prop-types';


function SignUp(props) {

  const [inputs, setInputs]=useState({
    email :'',
    password :'',
    firstName:'',
    lastName:''
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
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleChange}></input>
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
      
    </div>
  );
}

export default SignUp;