const Wish = ({ wish }) => {
  return (
    <div className="wish">
      <input type="text" value={wish} />
      <button>X</button>
    </div>
  );
};

export default Wish;
