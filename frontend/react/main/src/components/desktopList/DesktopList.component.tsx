import { collection, doc } from "firebase/firestore";
import React, { FC } from "react";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
  useFirestoreDocDataOnce,
  useSigninCheck,
} from "reactfire";
import Typography from "@mui/material/Typography";
import { Divider, List, ListItem, ListItemText } from "@mui/material";

interface Props {
  uid: string;
}

const DeskTopList: FC<Props> = ({ uid }) => {
  // wishLists ref
  const docRef = doc(useFirestore(), "wishLists", uid);
  const collectionRef = collection(useFirestore(), "wishLists", uid, "wishes");

  // user Ref
  const userDocRef = doc(useFirestore(), "users", uid);

  // data from reactfire
  const docRes = useFirestoreDocData(docRef);
  const collectionRes = useFirestoreCollectionData(collectionRef);
  const userDocRes = useFirestoreDocDataOnce(userDocRef);

  const success =
    docRes.status === "success" &&
    collectionRes.status === "success" &&
    userDocRes.status === "success";

  return success ? (
    <div className="desktop-list">
      <Typography variant="h3" color="initial">
        {userDocRes.data.displayName} sin ønskeliste
      </Typography>
      <List sx={{ width: "100%" }}>
        {collectionRes.data.map(({ wish, NO_ID_FIELD }, i) => (
          <ListItem
            key={NO_ID_FIELD}
            divider={i !== 0 || i !== collectionRes.data.length}
          >
            <ListItemText primary={wish} />
          </ListItem>
        ))}
      </List>
      <ul></ul>
    </div>
  ) : null;
};

export default DeskTopList;
