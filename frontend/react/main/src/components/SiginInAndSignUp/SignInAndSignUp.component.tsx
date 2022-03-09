import { Card, Typography } from "@mui/material";
import React, { FC } from "react";
import SignIn from "../SignIn.component";

interface Props {}

const SignInAndSignUp: FC<Props> = () => {
  return (
    <div>
      <Card>
        <SignIn />
      </Card>
    </div>
  );
};

export default SignInAndSignUp;
