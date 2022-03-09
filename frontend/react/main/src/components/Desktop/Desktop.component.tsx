import { Tab, Tabs, Button } from "@mui/material";
import { Box } from "@mui/system";
import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import WishList from "../WishList/WishList.component";
import UserButtons from "../UserButtons/UserButtons.component";
import "./Desktop.styles.scss";

interface Props {}

const Desktop: FC<Props> = () => {
  const [selectedUid, setSelectedUid] = useState<string | null>(null);

  return (
    <div className="desktop-container">
      {/* List of users  */}
      <UserButtons setSelectedUid={setSelectedUid} />
      {selectedUid && <WishList uid={selectedUid} />}
    </div>
  );
};

export default Desktop;
