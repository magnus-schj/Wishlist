import { useDispatch } from "react-redux";
import { deleteWish } from "../../redux/mock-data/mock-data.actions";

const Wish = ({ wish, name }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteWish({ name: name, id: id }));
  };
  return (
    <div className="wish">
      <input type="text" defaultValue={wish} />
      <button onClick={() => handleClick(wish)}>X</button>
    </div>
  );
};

export default Wish;
