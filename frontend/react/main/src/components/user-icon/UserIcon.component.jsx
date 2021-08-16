import React from "react";

import { useDispatch } from "react-redux";
import { getUidAndName } from "../../features/displayed-wishList/displayedWishList.slice.js";

import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "50px",
    height: "5rem",
    margin: "0.5rem",
    padding: "3rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#e0e0e0",
  },
  header: {
    margin: 0,
    padding: 0,
  },
});

const UserIcon = ({ name, uid }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    dispatch(getUidAndName({ uid: uid, name: name }));
  };
  return (
    <ButtonBase
      variant="contained"
      className={classes.root}
      onClick={handleClick}
    >
      <h1 className={classes.header}>{name.charAt(0)}</h1>
      <h4>{name}</h4>
    </ButtonBase>
  );
};

export default UserIcon;
