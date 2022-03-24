import React, { FC, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import { addWish, createWishListDoc } from "../firebase/firebase.utils";
import Button from "@mui/material/Button";
import { collection, doc } from "firebase/firestore";
import AddWish from "./AddWish.component";
import OwnWish from "./OwnWish/OwnWish.component";

interface Props {}

const OwnList: FC<Props> = () => {
  const { status, data } = useSigninCheck();

  useEffect(() => {
    if (data.signedIn) {
      createWishListDoc(data.user.uid);
    }
  }, []);
  if (!data.user) return null;

  const { uid } = data.user;

  const ref = collection(useFirestore(), "wishLists", uid, "wishes");
  const wishListRes = useFirestoreCollectionData(ref);

  return (
    <div className="desktop-list">
      <Typography variant="h4" color="initial" align="center">
        Dine ønsker
      </Typography>
      <AddWish uid={uid} />
      <div className="base-container" style={{ minWidth: "335px" }}>
        {wishListRes.status === "success" ? (
          wishListRes.data.map(({ wish, NO_ID_FIELD }) => (
            <OwnWish
              key={NO_ID_FIELD}
              initalWish={wish}
              wid={NO_ID_FIELD}
              uid={data.user.uid}
            />
          ))
        ) : (
          <div>Laster...</div>
        )}
      </div>
    </div>
  );
};

export default OwnList;
