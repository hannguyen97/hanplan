import db from '../../config/fbConfig';
import { getFirestore} from 'redux-firestore'
export  const createProject = (project) =>{
  return (dispatch,getState, {getFirebase ,getFirestore})=>{
      
      db.collection('projects').add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Nimja',
        authorId: 12345,
        createdAt : new Date()
      }).then(()=>{
        dispatch({type:'CREATE_PROJECT',project})
      }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR',err})
      })
  
  }
}
export const  getProject =() =>{
  return  async (dispatch,getState, {getFirebase ,getFirestore})=>{
    const firestore =getFirestore();
    const projects=[];
    const response=db.ref('projects');
    const data = await response.get();
    console.log(response)
    // data.docs.forEach(item=>{
    //     projects.push(item.data());
    //     });
        dispatch({type:'GET_PROJECT',projects})
  }
}
