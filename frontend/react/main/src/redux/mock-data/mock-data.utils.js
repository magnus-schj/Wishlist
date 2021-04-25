export const findAndDelete = (state, payload) => {
  state.find((user) => user.name === payload.name).wishes.splice(payload.id, 1);
  return state;
};
