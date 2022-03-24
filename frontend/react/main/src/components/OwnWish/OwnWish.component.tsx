import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardActions,
  IconButton,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import { deleteWish, updateWish } from "../../firebase/firebase.utils";

interface Props {
  initalWish: string;
  wid: string;
  uid: string;
}

type color =
  | "primary"
  | "success"
  | "error"
  | "secondary"
  | "info"
  | "warning"
  | undefined;

const OwnWish: FC<Props> = ({ initalWish, wid, uid }) => {
  const [wish, setWish] = useState(initalWish);
  const [label, setLabel] = useState("");
  const [textFieldColor, setTextFieldColor] = useState<color>("primary");

  const handleUpdate = () => {
    updateWish(uid, wid, wish);
    setLabel("Lagret!");
    setTextFieldColor("success");

    setInterval(() => {
      setLabel("");
      setTextFieldColor("primary");
    }, 1200);
  };
  return (
    <Card className="own-wish">
      <CardContent sx={{ flexGrow: 10 }}>
        <TextField
          label={label}
          id={wid}
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          color={textFieldColor}
          fullWidth
        />
      </CardContent>
      <CardActions sx={{ flexGrow: 1 }}>
        <IconButton onClick={handleUpdate} sx={{ padding: 0 }}>
          <SaveIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => deleteWish(uid, wid)}
          sx={{ padding: 0 }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OwnWish;
