import React, { useState } from "react";

import {
  Container,
  Typography,
  TextField,
  FormControl,
} from "@material-ui/core";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container>
      <Typography variant="h3" color="initial">
        Sign up
      </Typography>
      <FormControl>
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
      </FormControl>
    </Container>
  );
};

export default SignUp;
