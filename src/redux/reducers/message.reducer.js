import { messageConstants } from "../../constants";

const initialState = {};

export function message(state = initialState, action) {
  switch (action.type) {
    case messageConstants.SET_MESSAGE:
      return {
        message: action.payload
      };
    case messageConstants.CLEAR_MESSAGE:
      return {
        message: ""
      };
    default:
      return state;
  }
}
