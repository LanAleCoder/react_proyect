const initialState = {
  authToken: null,
  userData: {},
  anyData: [],
};

export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};
