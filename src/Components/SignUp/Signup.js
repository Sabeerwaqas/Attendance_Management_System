import React, { useState } from "react";
import "./signup.css";
import { Box, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
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
        <h4 className="signup-heading">SignUp</h4>

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
            <TextField
              variant="standard"
              label="Re-Type Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                marginTop: "4%",
              }}
            />
            <button type="submit" className="signup-btn">
              SignUp
            </button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Signup;
