import React from "react";
import { useForm } from "../../custom-hooks/useForm";

import { Container, Typography, TextField } from "@material-ui/core";

const SignIn = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
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
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
};

export default SignIn;
