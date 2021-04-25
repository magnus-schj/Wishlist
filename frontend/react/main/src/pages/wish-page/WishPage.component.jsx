import Wish from "../../components/wish/Wish.Component";

import "./wish-page.styles.css";

const WishPage = ({ name, wishes, isLoggedIn }) => {
  return (
    <div className="wish-page">
      <h1>{name}s wishlist</h1>
      <div className="wish-list">
        <table>
          <tbody>
            {wishes.map((wish, i) => {
              return (
                <tr>
                  {isLoggedIn ? (
                    <Wish wish={wish} id={i} key={i} />
                  ) : (
                    <td key={i}>{wish} </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishPage;
