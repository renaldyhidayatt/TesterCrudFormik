import { usersConstants } from "constants/";

const initialState = {
  lists: [],
  getUsersDetail: false,
  errorUserDetail: false,
  getUsersResponse: false
};

export function users(state = initialState, action) {
  switch (action.type) {
    case usersConstants.GET_USERS_LIST:
      return {
        ...state,
        lists: action.payload
      };
    case usersConstants.GET_USERS_BYID:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage
      };
    case usersConstants.CREATE_USERS:
      return {
        ...state,
        getUsersResponse: action.payload.data
      };
    case usersConstants.UPDATE_USERS:
      return {
        ...state,
        getUsersResponse: action.payload.data
      };
    default:
      return state;
  }
}
