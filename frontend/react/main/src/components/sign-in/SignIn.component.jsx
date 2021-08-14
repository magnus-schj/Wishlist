import React, { useState, useEffect } from "react";
import { useForm } from "../../custom-hooks/useForm";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0276aa",
    padding: "0.8rem 2rem",
    borderRadius: "5px",
    maxWidth: "20rem",
  },
  button: {
    margin: "1rem 0",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const [values, handleChange, setValues] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const initialError = { value: false, helperText: "" };
  const [errors, setErrors] = useState(initialError);

  let isMounted = true;
  useEffect(() => {
    isMounted = true;
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) {
      return;
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({ email: "", password: "" });
      setErrors(initialError);
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-email"
      ) {
        setErrors({ value: true, helperText: error.message });
      }
    }
  };
  return (
    <Container className={classes.container}>
      <Typography variant="h4" color="initial">
        Logg inn
      </Typography>
      <form className={classes.root}>
        <TextField
          id="email"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          helperText={errors.helperText}
          error={errors.value}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          helperText={errors.helperText}
          error={errors.value}
        />
        <Button
          type="submit"
          variant="text"
          color="default"
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </form>
      <i>eller...</i>
      <Button
        size="small"
        className={classes.button}
        variant={"contained"}
        onClick={() => signInWithGoogle()}
      >
        Fortsett med Google
      </Button>
    </Container>
  );
};

export default SignIn;
