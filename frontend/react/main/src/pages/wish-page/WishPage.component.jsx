import { useState } from "react";
import Wish from "../../components/wish/Wish.Component";

import "./wish-page.styles.css";

const WishPage = ({ name, wishes, isLoggedIn, setMockData }) => {
  const [wishesDeleted, setWishesDeleted] = useState(
    Array(wishes.length).fill(false)
  );
  const deleteWish = (i) => {
    const newDeletedWishes = wishesDeleted;
    newDeletedWishes[i] = true;
    setWishesDeleted(() => newDeletedWishes);
  };
  return (
    <div className="wish-page">
      <h1>{name}s wishlist</h1>
      <div className="wish-list">
        <table>
          {wishes.map((wish, i) => {
            return (
              <tr>
                {" "}
                {isLoggedIn ? (
                  <Wish wish={wish} id={i} key={i} deleteWish={deleteWish} />
                ) : (
                  <td>{wish} </td>
                )}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default WishPage;
