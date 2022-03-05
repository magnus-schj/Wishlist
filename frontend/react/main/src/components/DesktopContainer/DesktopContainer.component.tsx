import { Tab, Tabs, Button } from "@mui/material";
import { Box } from "@mui/system";
import { collection, doc, DocumentData } from "firebase/firestore";
import React, { FC, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import DesktopPage from "../DesktopPage/DesktopPage.component";
import UserButtons from "../UserButtons/UserButtons.component";
import "./DesktopContainer.styles.scss";

interface Props {}

const DesktopContainer: FC<Props> = () => {
  const [selectedList, setSelectedList] = useState<DocumentData | null>(null);

  // data for all users
  const ref = collection(useFirestore(), "users");
  const { status, data } = useFirestoreCollectionData(ref);
  if (!data) return null;
  // filters out anyone who is not vertified
  const filteredData = data.filter(({ vertified }) => vertified === true);
  const success = status === "success";
  return success ? (
    <div className="desktop-container">
      {/* List of users  */}
      <UserButtons data={filteredData} setSelectedList={setSelectedList} />
      {selectedList && <DesktopPage userInfo={selectedList} />}
    </div>
  ) : (
    <div>Laster...</div>
  );
};

export default DesktopContainer;
