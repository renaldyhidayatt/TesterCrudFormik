import axios from "axios";
// import config from "config";

export const usersServices = {
  getAll,
  getById
};

function getAll() {
  return axios.get(
    "https://my-json-server.typicode.com/afifbasya/reactjs-redux/users"
  );
}

function getById(id) {
  const requestOptions = {
    method: "GET"
  };
  return fetch(
    "https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/" + id,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
