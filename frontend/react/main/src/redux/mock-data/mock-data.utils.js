export const removeWish = (state, payload) => {
  const { wish, name } = payload;

  const currentUserIndex = state.indexOf(
    state.find((user) => user.name === name)
  );

  let newState = [...state];
  newState[currentUserIndex].wishes = state[currentUserIndex].wishes.filter(
    (w) => w !== wish
  );

  return newState;
};
