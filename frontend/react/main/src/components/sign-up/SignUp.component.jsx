import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: "30rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    maxWidth: "100%",
    margin: "2rem auto",
    minWidth: "30rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: false,
    helperText: "",
  });
  const reset = () => {
    setName({ ...name, error: false, helperText: "" });
    setEmail({ ...email, error: false, helperText: "" });
    setPassword({ ...password, error: false, helperText: "" });
    setConfirmPassword({ ...confirmPassword, error: false, helperText: "" });
  };
  const clearInputs = () => {
    setName({ ...name, value: "", error: false });
    setEmail({ ...email, value: "", error: false });
    setPassword({ ...password, value: "", error: false });
    setConfirmPassword({ ...confirmPassword, value: "", error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset();
    // ! Local validation:
    // ! x Name is not null
    // ! x passwords match

    if (name.value === "") {
      setName({ ...name, error: true, helperText: "Please write a name" });
      return;
    }
    setName({ ...name, error: false, helperText: "" });

    if (password.value !== confirmPassword.value) {
      setPassword({
        ...password,
        error: true,
        helperText: "Passwords don't match",
      });
      return;
    }
    setPassword({ ...password, error: false });
    setConfirmPassword({ ...confirmPassword, error: false });
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );

      const nameValue = name.value;
      await createUserProfileDocument(user, { nameValue });

      clearInputs();
      console.log("signed up!");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setEmail({ ...email, error: true, helperText: error.message });
          break;
        case "auth/weak-password":
          setPassword({ ...password, error: true, helperText: error.message });
          setConfirmPassword({ ...password, error: true });
          break;
        case "auth/email-already-in-use":
          setEmail({ ...email, error: true, helperText: error.message });
          break;
      }
    }
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h3" color="initial">
        Sign up
      </Typography>
      <form className={classes.form}>
        <TextField
          id="name"
          label="Name"
          value={name.value}
          error={name.error}
          helperText={name.helperText}
          onChange={(e) => setName({ ...name, value: e.target.value })}
        />
        <TextField
          id="email"
          label="Email"
          value={email.value}
          type="email"
          error={email.error}
          helperText={email.helperText}
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
        />
        <TextField
          id="password"
          label="Password"
          value={password.value}
          type="password"
          error={password.error}
          helperText={password.helperText}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
        />
        <TextField
          id="confirm-password"
          label="Confirm password"
          value={confirmPassword.value}
          type="password"
          error={password.error}
          helperText={password.helperText}
          onChange={(e) =>
            setConfirmPassword({
              ...confirmPassword,
              value: e.target.value,
            })
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
