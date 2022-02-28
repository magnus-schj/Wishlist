import React, { FC } from "react";
import DesktopListContainer from "./desktopList/DesktopListContainer.component";
import MobileList from "./MobileList.component";

interface Props {
  mobile: boolean;
}

const OthersList: FC<Props> = ({ mobile }) => {
  return mobile ? <MobileList /> : <DesktopListContainer />;
};

export default OthersList;
