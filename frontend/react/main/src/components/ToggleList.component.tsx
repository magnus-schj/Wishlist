import React, { FC } from "react";
import { useContext } from "react";
import { ToggleListContext } from "../Contexts";
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";

interface Props {}

const ToggleList: FC<Props> = () => {
  const ListContext = useContext(ToggleListContext);
  if (!ListContext) return null;
  //   booleanValue: display own list
  const { booleanValue, setBoolean } = ListContext;
  console.log(ListContext);
  return booleanValue ? (
    <div>
      <IconButton
        aria-label="display other users wishlist"
        onClick={setBoolean}
      >
        <PeopleIcon />
      </IconButton>
    </div>
  ) : (
    <div>
      <IconButton aria-label="display own list" onClick={setBoolean}>
        <PersonIcon />
      </IconButton>
    </div>
  );
};

export default ToggleList;
