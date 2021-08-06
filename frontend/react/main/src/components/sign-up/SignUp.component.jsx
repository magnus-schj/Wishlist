import React, { useState } from "react";
import { useForm } from "../../custom-hooks/useForm";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    margin: "2rem 0",
    minWidth: "30rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const SignUp = ({ headerVariants }) => {
  const classes = useStyles();
  const [values, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const initialErrors = {
    name: { error: false, helperText: "" },
    email: { error: false, helperText: "" },
    password: { error: false, helperText: "" },
    confirmPassword: { error: false, helperText: "" },
  };
  const [errors, setErrors] = useState(initialErrors);

  const handleClick = (e) => {
    e.preventDefault();
    setErrors(initialErrors);
    // ! Local validation:
    // ! x Name is not null
    // ! x passwords match

    // name is not just whitespace
    let formError = false;
    if (values.name === "" || values.name.trim() === "") {
      setErrors({
        ...errors,
        name: { error: true, helperText: "Please fill out name" },
      });
      formError = true;
    }

    if (
      values.password != values.confirmPassword ||
      values.password.trim() === ""
    ) {
      setErrors({
        ...errors,
        password: {
          error: true,
          helperText: "Passwords do not match or invalid password",
        },
        confirmPassword: { error: true, helperText: "" },
      });
      formError = true;
    }

    if (formError) return;
  };

  return (
    <Container className={classes.root}>
      <Typography variant={headerVariants.large} color="initial">
        Registrer deg
      </Typography>
      <form className={classes.form}>
        <TextField
          id="name"
          name="name"
          label="Navn"
          value={values.name}
          onChange={handleChange}
          error={errors.name.error}
          helperText={errors.name.helperText}
        />
        <TextField
          id="email"
          name="email"
          label="epost"
          value={values.email}
          onChange={handleChange}
          error={errors.email.error}
          helperText={errors.email.helperText}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Passord"
          value={values.password}
          onChange={handleChange}
          error={errors.password.error}
          helperText={errors.password.helperText}
        />
        <TextField
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Bekreft passord"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword.error}
          helperText={errors.confirmPassword.helperText}
        />
        <Button type="submit" onClick={handleClick}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
