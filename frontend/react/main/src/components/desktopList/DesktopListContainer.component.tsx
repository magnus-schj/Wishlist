import { Tab, Tabs, Button } from "@mui/material";
import { Box } from "@mui/system";
import { collection, doc } from "firebase/firestore";
import React, { FC, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import DeskTopList from "./DesktopList.component";
import "./desktopList.styles.scss";

interface Props {}

const DesktopListContainer: FC<Props> = () => {
  const [selectedList, setSelectedList] = useState<string | null>(null);

  const ref = collection(useFirestore(), "users");
  const res = useFirestoreCollectionData(ref);
  const success = res.status === "success";
  return success ? (
    <div className="desktop-container">
      <Box className="user-buttons">
        {res.data.map(({ displayName, NO_ID_FIELD }, i) => (
          <Button
            color="info"
            key={NO_ID_FIELD}
            onClick={() => setSelectedList(NO_ID_FIELD)}
          >
            {displayName}
          </Button>
        ))}
      </Box>
      {selectedList && <DeskTopList uid={selectedList} />}
    </div>
  ) : (
    <div>Laster...</div>
  );
};

export default DesktopListContainer;
