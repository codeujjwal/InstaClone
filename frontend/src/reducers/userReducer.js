export const initialState = null;

export const reducer = (state, actions) => {
  const { type, payload } = actions;

  if (type === "USER") {
    return payload;
  }
  if (type === "CLEAR") {
    return null;
  }
  return state;
};
