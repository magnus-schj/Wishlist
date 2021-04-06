const Wish = ({ wish, deleted, deleteWish, id }) => {
  return (
    <div className="wish">
      <input type="text" value={wish} />
      <button onClick={() => deleteWish(id)}>X</button>
    </div>
  );
};

export default Wish;
