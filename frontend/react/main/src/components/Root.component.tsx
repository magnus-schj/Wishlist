import { Typography, Button, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData, useSigninCheck } from "reactfire";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Home from "./Home.component";
import ModalComponent from "./modal";
import NavBar from "./NavBar.component";
import SignInAndSignUp from "./SiginInAndSignUp/SignInAndSignUp.component";

interface Props {}

const Root: FC<Props> = () => {
  // state
  const [modalOpen, setModalOpen] = useState(false);

  // reactfire
  const { status, data } = useSigninCheck();

  useEffect(() => {
    // closes if user is logged in
    data && close();
    // creates a user profile document if there is none and provider is google
    if (
      data &&
      data.signedIn &&
      data.user.providerData[0].providerId === "google.com"
    ) {
      const asyncAction = async () => {
        await createUserProfileDocument(data.user.uid, {
          displayName: data.user.displayName,
        });
      };
      asyncAction();
    }
  }, [data]);

  // opens and closes modals
  const open = () => {
    setModalOpen(true);
  };
  const close = () => {
    setModalOpen(false);
  };

  // media queries
  const mobile = useMediaQuery("(max-width: 450px)");

  if (status === "loading") return <div>Laster...</div>;
  return (
    <div>
      <NavBar
        bottom={mobile}
        open={open}
        signedIn={data.signedIn}
        uid={data.user?.uid}
      />

      <Typography variant="h1" color="initial">
        Wishlist
      </Typography>

      <Home mobile={mobile} />
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
