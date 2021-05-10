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

export const findCurrentUser = (state, payload) => {
  const { name } = payload;
  return state.indexOf(state.find((user) => user.name === name));
};

export const logIn = (state, payload) => {
  const currentUser = findCurrentUser(state, payload);
  let newState = [...state];
  newState[currentUser].isLoggedIn = true;
  return newState;
};
