const WishList = ({ name, wishes }) => (
  <div className="wish-list">
    <h1>{name}'s wishlist</h1>
    <ul>
      {wishes.map((wish) => {
        return <li>{wish}</li>;
      })}
    </ul>
  </div>
);

export default WishList;
