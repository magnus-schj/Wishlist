import React, { FC } from "react";
import DesktopContainer from "./DesktopContainer/DesktopContainer.component";
import MobileList from "./MobileList.component";

interface Props {
  mobile: boolean;
}

const Home: FC<Props> = ({ mobile }) => {
  return mobile ? <MobileList /> : <DesktopContainer />;
};

export default Home;
