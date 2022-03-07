import { Tab, Tabs, Button } from "@mui/material";
import { Box } from "@mui/system";
import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import DesktopPage from "../DesktopPage/DesktopPage.component";
import UserButtons from "../UserButtons/UserButtons.component";
import "./Desktop.styles.scss";

interface Props {}

const Desktop: FC<Props> = () => {
  const [selectedList, setSelectedList] = useState<DocumentData | null>(null);

  return (
    <div className="desktop-container">
      {/* List of users  */}
      <UserButtons setSelectedList={setSelectedList} />
      {selectedList && <DesktopPage userInfo={selectedList} />}
    </div>
  );
};

export default Desktop;
