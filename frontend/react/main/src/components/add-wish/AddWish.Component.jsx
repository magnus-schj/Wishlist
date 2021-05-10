const AddWish = () => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    console.log("handleclick");
  };
  return (
    <div className="add-wish">
      <input
        type="text"
        placeholder="add new wish..."
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={() => handleClick()}>Legg til</button>
    </div>
  );
};

export default AddWish;
