import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseDetails";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Alert } from "@mui/material";
import Login from "./login";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError("Failed to create an account");
    }
  };

  

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
          onSubmit={handleSignup}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Sign up
          </Typography>
          {error && <Alert severity="error">{error}</Alert>} {}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1">Email:</Typography>
            <TextField
              label="Enter your email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Signup
          </Button>
          <Typography align="center">
            Already have an account?{" "}
            <Button
              color="secondary"
              onClick={() => navigate("/login")}
              sx={{ textTransform: "none" }}
            >
             Login
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Signup;
