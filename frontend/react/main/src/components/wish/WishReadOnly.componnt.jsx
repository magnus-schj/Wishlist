import { ListItem } from "@material-ui/core";
import React from "react";

const WishReadOnly = ({ test }) => {
  return (
    <div>
      <ListItem>{test}</ListItem>
    </div>
  );
};

export default WishReadOnly;
