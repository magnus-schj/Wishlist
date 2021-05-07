import { useSelector } from "react-redux";
import "./wish-page.styles.css";

const WishPage = ({ match }) => {
  console.log("props:");
  console.log(match.params.userID);
  const userInfo = useSelector((state) =>
    state.mockData.find((user) => user.name === match.params.userID)
  );
  console.log(userInfo);
  return (
    <div className="wish-page">
      {userInfo ? (
        <div className="wish-page">
          <h1>{userInfo.name}'s wishes</h1>
        </div>
      ) : (
        <h1>Denne siden finnes ikke!</h1>
      )}
    </div>
  );
};

export default WishPage;
