import React, { FC } from "react";

interface Props {
  uid: string | null;
}

const DeskTopList: FC<Props> = ({ uid }) => {
  return <div>{uid && <h1>{uid}</h1>}</div>;
};

export default DeskTopList;
