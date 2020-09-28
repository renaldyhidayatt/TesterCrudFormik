// import { usersServices } from "services/";
import axios from "axios";
import { usersConstants, messageConstants } from "constants/";

export const getUsersById = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/` + id
  );

  dispatch({
    type: usersConstants.GET_USERS_BYID,
    payload: res.data
  });
};

export const getUserDetail = (id) => async (dispatch) => {
  try {
    await axios
      .get(
        "https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: usersConstants.GET_USERS_BYID,
          payload: {
            data: response.data,
            errorMessage: false
          }
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const getUsersList = () => async (dispatch) => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/`
  );

  dispatch({
    type: usersConstants.GET_USERS_LIST,
    payload: res.data
  });
};

export const createUser = (data) => async (dispatch) => {
  try {
    await axios
      .post(
        "https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/" +
          data
      )
      .then((res) => {
        dispatch({
          type: usersConstants.CREATE_USERS,
          payload: res.data
        });
      });
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    dispatch({
      type: messageConstants.SET_MESSAGE,
      payload: message
    });
  }
};

export const updateUser = (data, id) => async (dispatch) => {
  try {
    await axios
      .put(
        "https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/" +
          id,
        data
      )
      .then((res) => {
        dispatch({
          type: usersConstants.UPDATE_USERS,
          payload: res.data
        });
      });
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    dispatch({
      type: messageConstants.SET_MESSAGE,
      payload: message
    });
  }
};
