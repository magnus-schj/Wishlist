import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import { doc } from "firebase/firestore";
import React, { FC } from "react";
import { useFirestore, useFirestoreDocData, useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import SignedInAsMessage from "./SignedInAs.component";

interface Props {
  bottom: boolean;
  open: () => void;
  signedIn: boolean;
  uid?: string;
}

const NavBar: FC<Props> = ({ bottom, open, signedIn, uid }) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: bottom ? "auto" : 0, bottom: bottom ? 0 : "auto", zIndex: 2 }}
    >
      <Toolbar>
        <div style={{ flex: 1 }}>{uid && <SignedInAsMessage uid={uid} />}</div>
        {signedIn ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => auth.signOut()}
          >
            Logg ut
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={() => open()}>
            Logg inn
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
