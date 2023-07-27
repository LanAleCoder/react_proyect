const initialState = {
  userToken: null,
};

const actions = {
  PERSIST_TOKEN: 'PERSIST_TOKEN',
  SIGN_IN: 'SIGN_IN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
};

const AuthReducer = (prevState: any, action: any) => {
  switch (action.type) {
    case actions.PERSIST_TOKEN:
      return {...prevState, userToken: action.token};
    case actions.SIGN_IN:
      return {...prevState, userToken: action.token};
    case actions.LOGOUT:
      return {...prevState, userToken: null};
    case actions.REGISTER:
      return {...prevState, userToken: action.token};
    default:
      return prevState;
  }
};

export default AuthReducer;
export {actions, initialState};
