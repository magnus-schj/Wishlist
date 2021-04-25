const Wish = ({ wish, id, handleClick }) => {
  return (
    <div className="wish">
      <input type="text" value={wish} />
      <button onClick={() => handleClick(id)}>X</button>
    </div>
  );
};

export default Wish;
