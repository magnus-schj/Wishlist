import React, { useState, useEffect } from "react";
import { useForm } from "../../custom-hooks/useForm";

import { auth } from "../../firebase/firebase.utils";

import { Container, Typography, TextField, Button } from "@material-ui/core";

const SignIn = () => {
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
    <Container>
      <Typography variant="h3" color="initial">
        Sign in
      </Typography>
      <form>
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
    </Container>
  );
};

export default SignIn;
