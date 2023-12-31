import React, { useState, useEffect } from "react";
import "./login.css";
import { Box, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.js";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {


  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };


  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <div className="signup-box">
        <h4 className="signup-heading">
          <Link to={"/"}>LogIn</Link>
        </h4>
        <h4 className="signup-heading">
          <Link to={"/signup"}>SignUp</Link>
        </h4>

        <Box
          sx={{
            marginLeft: "20%",

            marginTop: "10%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                marginTop: "0%",
              }}
            />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                marginTop: "4%",
              }}
            />
            <button onClick={login} type="submit" className="signup-btn">
              LogIn
            </button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Login;
