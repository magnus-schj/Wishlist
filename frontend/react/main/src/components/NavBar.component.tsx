import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import React, { FC } from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import ToggleList from "./ToggleList.component";

interface Props {
  bottom: boolean;
  open: () => void;
  signedIn: boolean;
}

const NavBar: FC<Props> = ({ bottom, open, signedIn }) => {
  // reactfire
  const { data } = useSigninCheck();

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: bottom ? "auto" : 0, bottom: bottom ? 0 : "auto", zIndex: 2 }}
    >
      <Toolbar>
        <div>
          {data.signedIn ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => auth.signOut()}
            >
              Logg ut
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => open()}
            >
              Logg inn
            </Button>
          )}
        </div>
        {signedIn && <ToggleList />}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
