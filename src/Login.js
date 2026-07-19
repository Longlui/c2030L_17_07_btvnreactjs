import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,Button,Stack,TextField,Typography,Paper,
} from "@mui/material";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Email không được để trống");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Email không đúng định dạng");
      return;
    }

    if (password.trim() === "") {
      alert("Mật khẩu không được để trống");
      return;
    }

    if (password.length <= 6) {
      alert("Mật khẩu phải lớn hơn 6 ký tự");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/Home");
  };

return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundcolor: "#f4f4f4",
      }}
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h4" align="center" mb={3}>Login</Typography>

        <Stack spacing={2}>
          <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>

          <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>

          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Login;