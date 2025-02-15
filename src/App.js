import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Errors from './pages/Error';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Showmovie from './pages/Showmovie';
import Fav from './pages/Fav';
import SignIn from './lab2/SignInPage';
import SignUp from './lab2/SignUpPage';
import { useState } from 'react';
import { langContexte } from './Context/Lang';


function App() {
  
  const [langContext, setLangContext] = useState("en");


  return (
<div >  
<langContexte.Provider value={{ langContext, setLangContext }}>

  <instance/>

  <BrowserRouter>
      <Navbar/>
        <Switch>
            <Route path={"/"} component={Home} exact /> 
            <Route path={"/Fav"} component={Fav} exact /> 
            <Route path={"/showmovie/:id"} component={Showmovie} exact /> 
            <Route path={"/signin"} component={SignIn} exact /> 
            <Route path={"/signup"} component={SignUp} exact /> 
            <Route path={"*"} component={Errors} exact /> 

            {/* <Route path={"*"} component={NotFound} /> */}

        </Switch>
      </BrowserRouter>
        </langContexte.Provider> 
    </div>
  );
}

export default App;