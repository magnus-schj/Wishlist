import { useState } from "react";
import { useDispatch } from "react-redux";

import { addWish } from "../../redux/mock-data/mock-data.actions";
const AddWish = ({ name, wishes }) => {
  // DISPATCH
  const dispatch = useDispatch();
  // STATE
  const [wish, setWish] = useState("");
  // FUNCTIONS
  const handleChange = (e) => {
    setWish(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    const doesExist = wishes.find((existingWish) => existingWish === wish);
    if (doesExist) {
      alert("Du kan ikke legge til det samme to ganger!");
    } else if (wish === "") {
      alert("vennligst legg til noe først!");
    } else {
      dispatch(addWish({ wish, name }));
      setWish("");
    }
    console.log("doesExist:", doesExist);
  };
  return (
    <div className="add-wish">
      <input
        type="text"
        placeholder="add new wish..."
        value={wish}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleClick()}>Legg til</button>
    </div>
  );
};

export default AddWish;
