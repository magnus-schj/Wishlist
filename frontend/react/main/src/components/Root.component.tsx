import { Typography, Button } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import ModalComponent from "./modal";
import SignInAndSignUp from "./SiginInAndSignUp/SignInAndSignUp.component";

interface Props {}

const Root: FC<Props> = () => {
  // state
  const [modalOpen, setModalOpen] = useState(false);

  //   reactfire
  const {
    status,
    data: { user },
  } = useSigninCheck();

  //   closes if user is logged in
  useEffect(() => {
    user && close();
  }, [user]);

  // opens and closes modals
  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Typography variant="h1" color="initial">
        Wishlist
      </Typography>
      {user ? (
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
        <Button variant="contained" onClick={() => open()}>
          Logg inn/registerer deg
        </Button>
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

export default Root;
