import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { changeCurrentForm } from "../../redux/slices/AuthorizationSlice/slice";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const dispatch = useDispatch();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormToggle = (formName: string) => {
    dispatch(changeCurrentForm(formName));
  };
  return (
    <Box
      component="form"
      sx={{
        marginTop: 7,
        "& .MuiTextField-root": {
          width: "100%",
          color: "white",
          marginBottom: 2,
        },
        "& .MuiInputBase-root": {
          color: "white",
          fontSize: 14,
          fontWeight: 400,
          borderBottom: "1px solid white",
          lineHeight: 1,
        },
        "& .MuiInputLabel-root": {
          color: "white",
          fontSize: 16,
          fontWeight: 400,
        },
        "& .MuiInputProps-root": {
          color: "white",
        },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue="Example 123"
          size="small"
          variant="standard"
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue="Example 123"
          size="small"
          variant="standard"
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Example 123"
          type={showPassword ? "text" : "password"}
          size="small"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                  color="inherit">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Example 123"
          type={showPassword ? "text" : "password"}
          size="small"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  aria-label="toggle password visibility"
                  color="inherit">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <Button
          sx={{
            background: "#539713",
            width: "100%",
            fontSize: 16,
            textTransform: "none",
          }}
          variant="contained">
          Sign Up
        </Button>
        <br />
        <br />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 12,
            color: "#F1F2F1",
          }}>
          Don’t have account yet?{" "}
          <a
            style={{
              color: "#7FAAF0",
              textDecoration: "none",
              marginLeft: 10,
            }}
            onClick={() => handleFormToggle("login")}>
            New Account
          </a>
        </p>
      </div>
    </Box>
  );
};
