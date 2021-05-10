export const setMockData = (data) => ({
  type: "SET_MOCK_DATA",
  payload: data,
});

export const deleteWish = (data) => ({
  type: "DELETE_WISH",
  payload: data,
});

export const testCase = (data) => ({
  type: "TEST_CASE",
  payload: data,
});
