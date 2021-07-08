import React, { useState } from "react";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    passwordError: false,
    confirmPasswordError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.error = true;
    alert("submitted!");
  };
  return (
    <Container>
      <Typography variant="h3" color="initial">
        Sign up
      </Typography>
      <form className={classes.form}>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="confirm-password"
          label="Confirm password"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
