import { useSelector } from "react-redux";

import AddWish from "../../components/add-wish/AddWish.Component";
import WishLoggedIn from "../../components/wish-logged-in/WishLoggedIn.Component";

import "./wish-page.styles.css";
import { useEffect, useState } from "react";

const WishPage = ({ routeProps: { match } }) => {
  const userLoggedIn = useSelector((state) => state.userLoggedIn);
  const [userInfo, setUserInfo] = useState(null);
  const mockData = useSelector((state) => state.mockData.data);

  useEffect(() => {
    setUserInfo(mockData.find((user) => user.name === match.params.userID));
  }, [match, mockData, setUserInfo]);

  // console.log("userLoggedIn:", userLoggedIn);

  // console.log("userInfo:", userInfo);
  let isLoggedIn;
  userInfo
    ? (isLoggedIn = userLoggedIn === match.params.userID)
    : (isLoggedIn = false);
  // console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="wish-page">
      {userInfo ? (
        <div className="wish-page">
          <h1>{userInfo.name}'s wishes</h1>
          <div className="wish-list-container">
            {isLoggedIn ? (
              <div>
                {userInfo.wishes.map((wish) => (
                  <WishLoggedIn key={wish} name={userInfo.name} wish={wish} />
                ))}
                <AddWish name={userInfo.name} wishes={userInfo.wishes} />
              </div>
            ) : (
              <ul>
                {userInfo.wishes.map((wish) => (
                  <li key={wish}>{wish}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <h1>Denne siden finnes ikke!</h1>
      )}
    </div>
  );
};

export default WishPage;
