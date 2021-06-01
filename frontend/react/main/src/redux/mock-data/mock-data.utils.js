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

export const findCurrentUser = (state, name) => {
  return state.indexOf(state.find((user) => user.name === name));
};

export const addWish = (state, payload) => {
  const { wish, name } = payload;
  console.log("payload:", payload);
  const currentUserIndex = findCurrentUser(state, name);
  let newState = [...state];
  newState[currentUserIndex].wishes.push(wish);
  return newState;
};
