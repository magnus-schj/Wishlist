import { useDispatch } from "react-redux";
const Wish = ({ wish, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="wish">
      <input type="text" value={wish} />
      <button>X</button>
    </div>
  );
};

export default Wish;
