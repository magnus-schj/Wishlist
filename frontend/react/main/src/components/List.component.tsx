import React, { FC } from "react";
import DesktopList from "./DestopList.component";
import MobileList from "./MobileList.component";

interface Props {
  mobile: boolean;
}

const OthersList: FC<Props> = ({ mobile }) => {
  return mobile ? <MobileList /> : <DesktopList />;
};

export default OthersList;
