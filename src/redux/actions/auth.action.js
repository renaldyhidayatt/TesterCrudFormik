import { messageConstants, usersConstants } from "../../constants";
import { authServices } from "../../services/auth.services";

export const login = (user) => async (dispatch) => {
  await authServices
    .login(user)
    .then((res) => {
      localStorage.setItem("users", res.data);
      dispatch({
        type: usersConstants.LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: usersConstants.LOGIN_FAILED
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message
      });
    });
};

export const register = () => async (dispatch) => {
  await authServices
    .register()
    .then((res) => {
      dispatch({
        type: usersConstants.REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: res.data.message
      });
    })
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: usersConstants.REGISTER_FAILRED
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message
      });
    });
};
