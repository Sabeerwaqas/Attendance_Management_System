import React from "react";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Context/ProtectedRoute";
import Main from "./Components/Main'/Main"

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<Login />}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path="/" element = {<ProtectedRoute Component = {Main} />}/>
      </Routes>
    </BrowserRouter> */}

    <Main/>

    </>
  );
};

export default App;
