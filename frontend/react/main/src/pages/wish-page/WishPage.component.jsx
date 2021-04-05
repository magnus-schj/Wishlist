import "./wish-page.styles.css";

const WishPage = ({ name, wishes, isLoggedIn }) => (
  <div className="wish-page">
    <h1>{name}s wishlist</h1>
    <div className="wish-list">
      <table>
        {wishes.map((wish) => {
          return (
            <tr>
              {" "}
              {isLoggedIn ? (
                <input type="text" value={wish} />
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

export default WishPage;
