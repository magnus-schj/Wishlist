import React, { FC } from "react";

interface Props {
  panelUid: string;
  value: string;
}

const TabPanel: FC<Props> = ({ panelUid, value }) => {
  return <div>{value === panelUid && <p>{panelUid}</p>}</div>;
};

export default TabPanel;
