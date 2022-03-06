import {
  useMediaQuery,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase/firebase.utils";
import ModalComponent from "./modal";
import NavBar from "./NavBar.component";
import SignInAndSignUp from "./SiginInAndSignUp/SignInAndSignUp.component";

interface Props {}

const MobileList: FC<Props> = () => {
  return (
    <div className="base-container">
      <Typography variant="h3" color="initial">
        Ønskelister
      </Typography>
    </div>
  );
};

export default MobileList;
