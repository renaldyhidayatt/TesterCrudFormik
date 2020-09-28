import { usersConstants } from "../../constants/";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
      isLoggedIn: true,
      user
    }
  : { isLoggedIn: false, user };

export function auth(state = initialState, action) {
  switch (action.type) {
    case usersConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case usersConstants.REGISTER_FAILRED:
      return {
        ...state,
        isLoggedIn: false
      };
    case usersConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      };
    case usersConstants.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case usersConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
}
