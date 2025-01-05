import React, { useState, useContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/authcontext'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";



const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const login = async (event) => {
    event.preventDefault(); // Prevent page reload
    setError(null); // Clear any previous errors


    try {
      const success = await context.authenticate(userName, password);
      if (success) {
        navigate(from); // Redirect on successful login
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  if (context.isAuthenticated) {
    return <Navigate to={from} />;
  }


  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Paper elevation={10} sx={{ padding: 4, backgroundColor: "#f7f7f7" }}>
        <Box
          component="form"
          onSubmit={login}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1">User:</Typography>
            <TextField
              label="Enter your username"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1">Password:</Typography>
            <TextField
              label="Enter your password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
          {}
          <Typography align="center">
            Don’t have an account?{" "}
            <Button
              color="secondary"
              onClick={() => navigate("/signup")}
              sx={{ textTransform: "none" }}
            >
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
