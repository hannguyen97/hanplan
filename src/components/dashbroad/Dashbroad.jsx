import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { projectAction } from '../../store/actions/projectAction'
import db from '../../config/fbConfig';
import { getFirestore } from 'redux-firestore'
import {createProject} from '../../store/actions/projectAction';
import {getProject} from '../../store/actions/projectAction';

import firebase from "../../config/fbConfig";


function Dashbroad() {
  const dispatch = useDispatch();
  
  // const projects = useSelector(state => state.projects.projects);
  // const firestore = useSelector(state => state.firebase);
  // console.log("projects has get",projects);
  const [ project, setProject ] = useState([]);
  
  
  
  useEffect( ()=>{
    async function fetchData(){
      const projects=[];
      const firestore = getFirestore();
      const response=firestore.collection('projects');
      const data= await response.get();
      data.docs.forEach(item=>{
      projects.push(item.data());
      setProject(projects);
      
      });
    }
    fetchData();
  },[])
  console.log("dbnew",project);

  
  
  return (
    <div className="dashbroad container">
      <div className="row">
         <div className="col s12 m6 ">
         <ProjectList projects={project}/>
         </div>
         <div className="col s12 m5 offset-1"></div>
         <Notifications/>
        
      </div>
      
    </div>
  );
}

export default Dashbroad;
