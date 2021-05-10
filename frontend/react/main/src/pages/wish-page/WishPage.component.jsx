import { useSelector } from "react-redux";

import Wish from "../../components/wish/Wish.Component";
import "./wish-page.styles.css";
import { useEffect, useState } from "react";

const WishPage = ({ match }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const mockData = useSelector((state) => state.mockData.data);

  useEffect(() => {
    setCurrentUser(mockData.find((user) => user.name === match.params.userID));
  }, [match, mockData, setCurrentUser]);

  return (
    <div className="wish-page">
      {currentUser ? (
        <div className="wish-page">
          <h1>{currentUser.name}'s wishes</h1>
          <div className="wish-list">
            {currentUser.wishes.map((wish) => (
              <Wish key={wish} name={currentUser.name} wish={wish} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Denne siden finnes ikke!</h1>
      )}
    </div>
  );
};

export default WishPage;
