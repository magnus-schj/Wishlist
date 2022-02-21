import { AppBar, Toolbar, Button } from "@mui/material";
import React, { FC } from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";

interface Props {
  bottom: boolean;
  open: () => void;
}

const NavBar: FC<Props> = ({ bottom, open }) => {
  // reactfire
  const { data } = useSigninCheck();

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: bottom ? "auto" : 0, bottom: bottom ? 0 : "auto", zIndex: 2 }}
    >
      <Toolbar>
        {data.signedIn ? (
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
