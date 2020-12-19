import userActionTypes from './user.types';

const initialState = {
  signedIn: false,
  firstName: '',
  lastName: '',
  email: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        signedIn: true,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
      };
    case userActionTypes.SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
