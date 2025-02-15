import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "bulma/css/bulma.min.css";
import SignUp from "./pages/SignUpPage";
import Errors from "./pages/Error";
import SignIn from "./pages/SignInPage";
import NewHome from "./pages/NewHome";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<NewHome/>}  />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />}  />
        <Route path="*" element={<Errors />}  />

      </Routes>
    </BrowserRouter>

  );
}

export default App;