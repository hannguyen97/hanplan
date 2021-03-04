import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashbroad from "./components/dashbroad/Dashbroad";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetail from "./components/projects/ProjectDetail";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path ='/' component={Dashbroad}/>
          <Route path ='/project/:id' component={ProjectDetail}/>
          <Route path ='/signin' component={SignIn}/>
          <Route path ='/signup' component={SignUp}/>
          <Route path ='/create' component={CreateProject}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
