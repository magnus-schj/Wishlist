import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC, useContext, useEffect, useState } from "react";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
  useFirestoreDocDataOnce,
} from "reactfire";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { auth } from "../../firebase/firebase.utils";
import OwnList from "../OwnList.component";
import { UserDataContext } from "../../contexts";

interface Props {
  uid: string;
}

const WishList: FC<Props> = ({ uid }) => {
  // all user data
  const userDataContext = useContext(UserDataContext);
  const selectedUser = userDataContext?.find(
    (user) => user.NO_ID_FIELD === uid
  );
  // gets data from users wishlist
  const ref = collection(useFirestore(), "wishLists", uid, "wishes");
  const res = useFirestoreCollectionData(ref);

  // makes sure all data is loaded
  const success = res.status === "success";
  if (!success) return null;

  const currentUserList = uid === auth.currentUser?.uid;
  return currentUserList ? (
    <OwnList />
  ) : (
    <div className="desktop-list">
      <Typography variant="h3" color="initial">
        {selectedUser && selectedUser.displayName} sin ønskeliste
      </Typography>
      <List sx={{ width: "100%" }}>
        {res.data.map((wishDoc, i) => (
          <ListItem
            key={wishDoc.NO_ID_FIELD}
            // divider if element is not first or last
            divider={i !== 0 || i !== res.data.length}
          >
            <ListItemText primary={wishDoc.wish} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WishList;
