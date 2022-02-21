import {
  useMediaQuery,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import ModalComponent from "./modal";
import NavBar from "./NavBar.component";
import SignInAndSignUp from "./SiginInAndSignUp/SignInAndSignUp.component";

interface Props {}

const MobileHome: FC<Props> = () => {
  // state
  const [modalOpen, setModalOpen] = useState(false);

  //   reactfire
  const { status, data } = useSigninCheck();

  //   closes if user is logged in
  useEffect(() => {
    data && close();
  }, [data]);

  // opens and closes modals
  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };

  if (status === "loading") return <div>Laster...</div>;
  return (
    <div className="base-container">
      <Typography variant="h3" color="initial">
        Wishlist
      </Typography>
      {data.signedIn ? (
        <>
          <h1>Du er logget inn</h1>
          <Button
            variant="contained"
            color="warning"
            onClick={() => auth.signOut()}
          >
            Logg ut
          </Button>
        </>
      ) : (
        <h1>du er ikke logget inn</h1>
      )}

      <AnimatePresence
        //  Disable any inital animations of children thart are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit animation before enetring component is rendered
        exitBeforeEnter={true}
      >
        {modalOpen && (
          <ModalComponent modalOpen={modalOpen} handleClose={close}>
            <SignInAndSignUp />
          </ModalComponent>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHome;
