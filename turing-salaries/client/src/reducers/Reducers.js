export const alumDataReducer = (state = [], action) => {
  switch (action.type) {
  case 'DATA_SUCCESS':
      return [...state, action.data];
    default:
      return state;
  }
};
