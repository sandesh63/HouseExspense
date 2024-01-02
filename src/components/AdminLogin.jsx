import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const defaultTheme = createTheme();
const schema = z.object({
  emailId: z.string().email({ message: "Please enter valid email" }),
  password: z
    .string()
    .min(3, { message: "Password Should be at least 3 characters" }),
});
const AdminLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (FormData) => {
    try {
      const response = await axios.post(
        "https://houseexspensebackend-production.up.railway.app/login",
        FormData
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Logged In Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check your password",
        });
      }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailId"
              label="Email Address"
              name="emailId"
              autoComplete="email"
              error={Boolean(errors.emailId)}
              helperText={errors.emailId?.message}
              {...register("emailId")}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.password)}
              {...register("password")}
              helperText={errors.password?.message}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AdminLogin;
