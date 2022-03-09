import { doc } from "firebase/firestore";
import React, { FC } from "react";
import {
  useFirestore,
  useFirestoreDocData,
  useFirestoreDocDataOnce,
} from "reactfire";
import Typography from "@mui/material/Typography";

interface Props {
  uid: string;
}

const SignedInAsMessage: FC<Props> = ({ uid }) => {
  const ref = doc(useFirestore(), "users", uid);
  const { status, data } = useFirestoreDocDataOnce(ref);
  return status === "success" ? (
    <Typography variant="subtitle2" color="initial">
      Du er logget inn som {data.displayName}
    </Typography>
  ) : null;
};

export default SignedInAsMessage;
