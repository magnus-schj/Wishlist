import React from "react";

import { useDispatch } from "react-redux";
import { getUidAndName } from "../../features/displayed-wishList/displayedWishList.slice.js";

import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    height: "6rem",
    width: "6rem",
    margin: "0.2rem",
    padding: "3rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.light,
    boxShadow: "3px 3px  black",
  },
  header: {
    margin: 0,
    padding: 0,
  },
}));

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
      <h3>{name}</h3>
    </ButtonBase>
  );
};

export default UserIcon;
