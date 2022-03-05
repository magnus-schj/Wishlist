import { Alert, Snackbar, Typography } from "@mui/material";
import { doc, DocumentData } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { useFirestore, useFirestoreDocData, useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import DesktopContainer from "./DesktopContainer/DesktopContainer.component";
import MobileList from "./MobileList.component";

interface Props {
  mobile: boolean;
}

const Home: FC<Props> = ({ mobile }) => {
  const { currentUser } = auth;
  // state
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  let res: null | DocumentData = null;
  let ref = null;
  if (currentUser) {
    ref = doc(useFirestore(), "users", currentUser.uid);
    res = useFirestoreDocData(ref);
  }

  useEffect(() => {
    if (res && res.status === "success") {
      if (!res.data.vertified) setSnackBarOpen(true);
      else setSnackBarOpen(false);
    }
  }, [res]);

  return (
    <>
      {mobile ? <MobileList /> : <DesktopContainer />}

      <Snackbar open={snackBarOpen}>
        <Alert severity="warning">
          Du må være verifisert for å være med. Kontakt meg.
          {currentUser && (
            <Typography variant="subtitle2" color="inherit">
              Din uid: {currentUser.uid}
            </Typography>
          )}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
