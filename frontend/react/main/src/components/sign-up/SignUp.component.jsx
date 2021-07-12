import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const SignUp = () => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [helperText, setHelperText] = useState({
    name: "",
    email: "",
    password: "",
  });

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // setPasswordError(true);
      setHelperText("Passwords does not match.");
      return;
    }
    // setPasswordError(false);
    setHelperText("");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { name });

      clearInputs();
      console.log("signed up!");
    } catch (error) {
      console.log(error);
    }
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
          value={inputValues.name}
          error={errors.name}
          helperText={helperText.name}
          onChange={(e) =>
            setInputValues({ ...inputValues, name: e.target.value })
          }
        />
        <TextField
          id="email"
          label="Email"
          value={inputValues.email}
          type="email"
          error={errors.email}
          helperText={helperText.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        <TextField
          id="password"
          label="Password"
          value={inputValues.password}
          type="password"
          error={errors.password}
          helperText={helperText.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
        />
        <TextField
          helperText={helperText}
          id="confirm-password"
          label="Confirm password"
          value={inputValues.confirmPassword}
          type="password"
          error={errors.password}
          helperText={helperText.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, confirmPassword: e.target.value })
          }
        />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
