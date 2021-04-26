import { useDispatch, useSelector } from "react-redux";
import { deleteWish } from "../../redux/mock-data/mock-data.actions";
import Wish from "../../components/wish/Wish.Component";

import "./wish-page.styles.css";

const WishPage = ({ name, isLoggedIn, primaryKey }) => {
  const dispatch = useDispatch();

  const wishes = useSelector((state) => state.mockData[primaryKey].wishes);
  const handleClick = (id) => {
    dispatch(deleteWish({ name: name, id: id }));
  };
  return (
    <div className="wish-page">
      <h1>{name}s wishlist</h1>
      <div className="wish-list">
        <table>
          <tbody>
            {wishes.map((wish, i) => (
              <tr key={i}>
                {isLoggedIn ? (
                  <Wish
                    wish={wish}
                    id={i}
                    name={name}
                    handleClick={handleClick}
                  />
                ) : (
                  <td>{wish} </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishPage;
