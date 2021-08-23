import React, { useState } from "react";

import { addWish } from "../../firebase/firebase.utils";

import { Container, TextField, Button } from "@material-ui/core";

const AddWish = ({ uid }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    addWish(uid, value);
    setValue("");
  };
  return (
    <Container>
      <form>
        <TextField
          id="newWish"
          label="Add a new wish"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="text" color="default" onClick={handleClick}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddWish;
