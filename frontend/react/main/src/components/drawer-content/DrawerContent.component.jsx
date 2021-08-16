import { auth } from "../../firebase/firebase.utils";

import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React from "react";

const DrawerContent = () => {
  return (
    <div role="presentation">
      <List>
        <ListItem>
          <Typography variant="h5" color="initial">
            Instillinger
          </Typography>
        </ListItem>
        <ListItem button onClick={() => auth.signOut()}>
          Logg ut
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerContent;
