export const initialState = null;

export const reducer = (state, actions) => {
  const { type, payload } = actions;

  if (type === "USER") {
    return payload;
  }
  return state;
};
