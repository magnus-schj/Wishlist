import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC } from "react";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
  useFirestoreDocDataOnce,
} from "reactfire";
import Typography from "@mui/material/Typography";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { auth } from "../../firebase/firebase.utils";
import OwnList from "../OwnList.component";

interface Props {
  userInfo: DocumentData;
}

const DesktopPage: FC<Props> = ({ userInfo }) => {
  const { NO_ID_FIELD, displayName } = userInfo;
  // gets data from users wishlist
  const ref = collection(useFirestore(), "wishLists", NO_ID_FIELD, "wishes");
  const res = useFirestoreCollectionData(ref);

  // makes sure all data is loaded
  const success = res.status === "success";
  if (!success) return null;

  const currentUserList = NO_ID_FIELD === auth.currentUser?.uid;
  return currentUserList ? (
    <OwnList />
  ) : (
    <div className="desktop-list">
      <Typography variant="h3" color="initial">
        {displayName} sin ønskeliste
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

export default DesktopPage;
