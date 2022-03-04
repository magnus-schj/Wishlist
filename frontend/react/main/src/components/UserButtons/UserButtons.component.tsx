import { Box, Button } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { FC } from "react";

interface Props {
  data: DocumentData[];
  setSelectedList: React.Dispatch<React.SetStateAction<DocumentData | null>>;
}

const UserButtons: FC<Props> = ({ data, setSelectedList }) => {
  return (
    <Box className="user-buttons">
      {data.map((userData) => (
        <Button
          color="info"
          key={userData.NO_ID_FIELD}
          onClick={() => setSelectedList(userData)}
        >
          {userData.displayName}
        </Button>
      ))}
    </Box>
  );
};

export default UserButtons;
