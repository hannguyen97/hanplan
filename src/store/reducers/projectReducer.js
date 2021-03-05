const initState ={
  projects : [
      {id:'1' ,title :'help me find peach' , content:' bla bla bla'},
      {id:'2' ,title :'colect all start' , content:' bla bla bla'},
      {id:'3' ,title :'eggs hunt with yosino' , content:' bla bla bla'},
  ]
}

const projectReducer = (state =initState,action)=>{
  switch (action.type) {
    case 'CREATE_PROJECT':
        console.log("create project",action.project);
        return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("create project error",action.err);
      return state ;
      case 'GET_PROJECT':
        console.log("GET project",action.projects); 
        return action.projects;
       
    default: 
     return state  ;
      
  }
      

}
export default projectReducer