import { useSelector } from "react-redux";

import Wish from "../../components/wish/Wish.Component";
import "./wish-page.styles.css";
import { useEffect, useState } from "react";

const WishPage = ({ routeProps: { match }, userLoggedIn }) => {
  console.log(match);
  console.log("userLoggedIn:", userLoggedIn);

  const [currentUser, setCurrentUser] = useState(null);
  const mockData = useSelector((state) => state.mockData.data);

  useEffect(() => {
    setCurrentUser(mockData.find((user) => user.name === match.params.userID));
  }, [match, mockData, setCurrentUser]);

  const isLoggedIn = userLoggedIn === currentUser.name;

  return (
    <div className="wish-page">
      {currentUser ? (
        <div className="wish-page">
          <h1>{currentUser.name}'s wishes</h1>
          <div className="wish-list">
            {isLoggedIn ? (
              currentUser.wishes.map((wish) => (
                <Wish key={wish} name={currentUser.name} wish={wish} />
              ))
            ) : (
              <ul>
                <li>Test</li>
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
