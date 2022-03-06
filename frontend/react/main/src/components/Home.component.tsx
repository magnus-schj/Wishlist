import { Alert, Snackbar, Typography } from "@mui/material";
import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
  useSigninCheck,
} from "reactfire";
import { auth } from "../firebase/firebase.utils";
import Desktop from "./Desktop/Desktop.component";
import MobileList from "./MobileList.component";

interface Props {
  mobile: boolean;
}

const Home: FC<Props> = ({ mobile }) => {
  const { currentUser } = auth;
  // state
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  // gets current users document if logged in
  let currentUserRes: null | DocumentData = null;
  if (currentUser) {
    currentUserRes = useFirestoreDocData(
      doc(useFirestore(), "users", currentUser.uid)
    );
  }

  useEffect(() => {
    if (currentUserRes && currentUserRes.status === "success") {
      if (!currentUserRes.data.vertified) setSnackBarOpen(true);
      else setSnackBarOpen(false);
    }
  }, [currentUserRes]);

  // all user docs
  const usersRes = useFirestoreCollectionData(
    collection(useFirestore(), "users")
  );
  if (!usersRes.data) return null;
  const vertifiedUsers = usersRes.data.filter(
    ({ vertified }) => vertified === true
  );
  return (
    <>
      {mobile ? (
        <MobileList data={vertifiedUsers} />
      ) : (
        <Desktop data={vertifiedUsers} />
      )}

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
