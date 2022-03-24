import { TextField, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { addWish } from "../firebase/firebase.utils";

interface Props {
  uid: string;
}

const AddWish: FC<Props> = ({ uid }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    addWish(uid, inputValue);
    setInputValue("");
  };

  return (
    <div className="add-wish">
      <TextField
        id="addWish"
        label="Legg til ønske"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AddWish;
