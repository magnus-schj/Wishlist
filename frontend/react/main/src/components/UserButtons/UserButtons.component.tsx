import { Box, Button } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { FC, useContext } from "react";
import { UserDataContext } from "../../contexts";

interface Props {
  setSelectedList: React.Dispatch<React.SetStateAction<DocumentData | null>>;
}

const UserButtons: FC<Props> = ({ setSelectedList }) => {
  const data = useContext(UserDataContext);
  return (
    <Box className="user-buttons">
      {data &&
        data.map((userData) => (
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
