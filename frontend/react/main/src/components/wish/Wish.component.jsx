import React, { useState } from "react";

import { Card, Container, Typography, TextField } from "@material-ui/core";

const Wish = ({ wish, userLoggedIn }) => {
  const [value, setValue] = useState("");
  return (
    <Card>
      {userLoggedIn ? (
        <form>
          <TextField
            id="wish"
            label=""
            onChange={(e) => setValue(e.target.value)}
            defaultValue={wish}
          />
        </form>
      ) : (
        <Typography variant="h4" color="initial">
          {wish}
        </Typography>
      )}
    </Card>
  );
};

export default Wish;
