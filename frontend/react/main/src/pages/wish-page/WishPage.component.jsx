import { useSelector, useDispatch } from "react-redux";

import { setNumber } from "../../redux/test-state/test.actions";

import Wish from "../../components/wish/Wish.Component";
import "./wish-page.styles.css";

const WishPage = ({ match }) => {
  const dispatch = useDispatch();

  // TEST
  const test = useSelector((state) => state.test);
  const testFunc = (n) => {
    dispatch(setNumber(n));
  };

  const userInfo = useSelector((state) =>
    state.mockData.find((user) => user.name === match.params.userID)
  );
  console.log("wishes:");
  console.log(userInfo.wishes);

  console.log("counter");
  return (
    <div className="wish-page">
      {userInfo ? (
        <div className="wish-page">
          <h1>{userInfo.name}'s wishes</h1>
          <div className="wish-list">
            {userInfo.wishes.map((wish, i) => (
              <Wish key={wish} name={userInfo.name} wish={wish} />
            ))}
          </div>
          <button onClick={() => testFunc(1)}>{test.number}</button>
        </div>
      ) : (
        <h1>Denne siden finnes ikke!</h1>
      )}
    </div>
  );
};

export default WishPage;
