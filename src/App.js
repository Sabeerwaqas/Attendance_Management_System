import React from "react";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Main/Sidebar/Sidebar";
import Classes from "./Components/Classes/Classes";
import Teacher from "./Components/Teachers/Teacher";
import Student from "./Components/Students/Student";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* Define your routes inside the Routes component */}
          <Route path="/" element={<Main />} />
          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
