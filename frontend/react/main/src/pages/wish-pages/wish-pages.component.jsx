import { Route } from "react-router";

import WishPage from "../../components/wish-page/WishPage.component";

const WishPages = () => {
  return <Route exact path="/users" component={WishPage} />;
};

export default WishPages;
