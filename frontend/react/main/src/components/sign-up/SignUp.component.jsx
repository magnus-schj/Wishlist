import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const SignUp = ({ history, headerVariants }) => {
  const classes = useStyles();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, handleChange, setValues] = useForm(initialValues);

  const initialErrors = {
    name: { error: false, helperText: "" },
    email: { error: false, helperText: "" },
    password: { error: false, helperText: "" },
    confirmPassword: { error: false, helperText: "" },
  };
  const [errors, setErrors] = useState(initialErrors);

  const handleClick = async (e) => {
    e.preventDefault();
    setErrors(initialErrors);
    // ! Local validation:
    // ! x Name is not null
    // ! x passwords match

    // name is not just whitespace
    let formError = false;
    let newErrors = { ...errors };

    // ! Validates each field
    if (values.name === "" || values.name.trim() === "") {
      newErrors = {
        ...newErrors,
        name: { error: true, helperText: "Please fill out name" },
      };
      formError = true;
    }

    if (
      values.password != values.confirmPassword ||
      values.password.trim() === ""
    ) {
      newErrors = {
        ...newErrors,
        password: {
          error: true,
          helperText: "Passwords do not match or invalid password",
        },
        confirmPassword: { error: true, helperText: "" },
      };
      formError = true;
    }

    if (values.email.trim() === "") {
      newErrors = {
        ...newErrors,
        email: { error: true, helperText: "Invalid email" },
      };
    }

    if (formError) {
      setErrors(newErrors);
      return;
    }
    // ! Client-side validation done

    // try to make a user with email and password
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );

      const nameValue = values.name;

      await createUserProfileDocument(user, { nameValue });
      auth.currentUser.updateProfile({
        displayName: values.name,
      });
      console.log("current user:", auth.currentUser);
      setValues(initialValues);
      history.push("/");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrors({
            ...errors,
            email: { error: true, helperText: error.message },
          });
          break;
        case "auth/weak-password":
          setErrors({
            ...errors,
            password: { error: true, helperText: error.message },
            confirmPassword: { error: true, helperText: "" },
          });
          break;
        case "auth/email-already-in-use":
          setErrors({
            ...errors,
            email: { error: true, helperText: error.message },
          });
          break;
      }
    }
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
