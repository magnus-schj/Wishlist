import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import "./OwnList.styles.scss";
import { deleteWish, updateWish } from "../../firebase/firebase.utils";

interface Props {
  initalWish: string;
  wid: string;
  uid: string;
}

const OwnWish: FC<Props> = ({ initalWish, wid, uid }) => {
  const [wish, setWish] = useState(initalWish);
  const [label, setLabel] = useState("");
  const [textFieldColor, setTextFieldColor] = useState("primary");

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
      <CardContent>
        <TextField
          label={label}
          id={wid}
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          color={textFieldColor}
        />
      </CardContent>
      <CardActions>
        <IconButton onClick={handleUpdate}>
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteWish(uid, wid)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OwnWish;
