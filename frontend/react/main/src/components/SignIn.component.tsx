import { Card, TextField, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "../customHooks";
import { signInWithGoogle } from "../firebase/firebase.utils";

interface Props {}

interface SignUpValues {
  email: string;
  password: string;
}

const SignIn: FC<Props> = () => {
  const initialState: SignUpValues = { email: "", password: "" };
  const [values, handleChange] = useForm(initialState);
  const { email, password } = values;
  return (
    <Card className="base-container">
      <Typography variant="h2" color="initial">
        Logg inn
      </Typography>
      <div className="base-container">
        <TextField
          id="email"
          label="Epost"
          value={email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          type="password"
          label="Passord"
          value={password}
          onChange={handleChange}
        />
      </div>
      <Button variant="contained">Logg inn</Button>

      <Button
        variant="contained"
        onClick={() => signInWithGoogle()}
        sx={{
          background: "hsl(5, 69%, 54%)",
          ":hover": {
            background: "hsl(30,90%,60%)",
          },
        }}
      >
        Fortsett med Google
      </Button>
    </Card>
  );
};

export default SignIn;
