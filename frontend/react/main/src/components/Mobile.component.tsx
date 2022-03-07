import {
  useMediaQuery,
  Typography,
  Button,
  AppBar,
  Toolbar,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";
import React, { FC, useContext, useEffect, useState } from "react";
import { useSigninCheck } from "reactfire";
import { UserDataContext } from "../contexts";
import { auth } from "../firebase/firebase.utils";
import ModalComponent from "./modal";
import NavBar from "./NavBar.component";
import SignInAndSignUp from "./SiginInAndSignUp/SignInAndSignUp.component";

interface Props {}

const Mobile: FC<Props> = () => {
  const data = useContext(UserDataContext);
  const [selectedList, setSelectedList] = useState("");
  return (
    <div className="base-container">
      <Typography variant="h3" color="initial">
        Ønskelister
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="selectLabel">Velg en person...</InputLabel>
        <Select
          labelId="selectLabel"
          value={selectedList}
          onChange={(e) => setSelectedList(e.target.value)}
        >
          <MenuItem disabled value="">
            <em>Velg en person...</em>
          </MenuItem>
          {data &&
            data.map(({ displayName, NO_ID_FIELD }) => (
              <MenuItem key={NO_ID_FIELD} value={NO_ID_FIELD}>
                {displayName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Mobile;
