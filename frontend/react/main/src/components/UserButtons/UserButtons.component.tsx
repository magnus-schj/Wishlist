import { Box, Button } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { FC, useContext } from "react";
import { UserDataContext } from "../../contexts";

interface Props {
  setSelectedUid: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserButtons: FC<Props> = ({ setSelectedUid }) => {
  const data = useContext(UserDataContext);
  return (
    <Box className="user-buttons">
      {data &&
        data.map(({ NO_ID_FIELD, displayName }) => (
          <Button
            color="info"
            key={NO_ID_FIELD}
            onClick={() => setSelectedUid(NO_ID_FIELD)}
          >
            {displayName}
          </Button>
        ))}
    </Box>
  );
};

export default UserButtons;
