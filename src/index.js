import React from "react";
import ReactDOM from "react-dom";
import UserInfo from "./UserInfo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { LOGIN, LOGOUT } from "./action-types";

const initialState = {
  userId: undefined,
  username: "",
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userId: action.payload.userId,
        username: action.payload.username,
        token: action.payload.token,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <UserInfo />
  </Provider>,
  document.getElementById("root")
);
