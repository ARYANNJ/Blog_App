import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import React from "react";

const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputs)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            margin: "80px 500px",
            boxShadow: "10px 10px 25px #ccc",
            padding: "20px",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontSize: "30px" }}>
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
          onChange={handleChange}
          name="email"
            type={"email"}
            value={inputs.email}
            placeholder="Email"
            margin="normal"
          />
          <TextField
          onChange={handleChange}
          name="password"
            type={"password"}
            value={inputs.password}
            placeholder="Password"
            margin="normal"
          />
          <Button
          type="submit"
            sx={{
              borderRadius: "20px",
              padding: "2px",
              marginTop: "5px",
              color: "white",
              background:
                "radial-gradient(circle, rgba(66,23,148,1) 0%, rgba(17,42,105,1) 100%)",
            }}
          >
            Submit
          </Button>
          or
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{
              borderRadius: "20px",
              padding: "2px",
              color: "white",
              background:
                "radial-gradient(circle, rgba(66,23,148,1) 0%, rgba(17,42,105,1) 100%)",
            }}
          >
            {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
