import { useSelector } from "react-redux";

import Wish from "../../components/wish/Wish.Component";
import "./wish-page.styles.css";
import { useEffect, useState } from "react";

const WishPage = ({ routeProps: { match } }) => {
  const userLoggedIn = useSelector((state) => state.userLoggedIn);
  const [userInfo, setUserInfo] = useState(null);
  const mockData = useSelector((state) => state.mockData.data);

  useEffect(() => {
    setUserInfo(mockData.find((user) => user.name === match.params.userID));
  }, [match, mockData, setUserInfo]);

  console.log("userLoggedIn:", userLoggedIn);

  console.log("userInfo:", userInfo);
  // userInfo ? (isLoggedIn = (userInfo.name === match.params.userID) ) : (const isLoggedIn = false)
  let isLoggedIn;
  userInfo
    ? (isLoggedIn = userLoggedIn === match.params.userID)
    : (isLoggedIn = false);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="wish-page">
      {userInfo ? (
        <div className="wish-page">
          <h1>{userInfo.name}'s wishes</h1>
          <div className="wish-list">
            {isLoggedIn ? (
              userInfo.wishes.map((wish) => (
                <Wish key={wish} name={userInfo.name} wish={wish} />
              ))
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
