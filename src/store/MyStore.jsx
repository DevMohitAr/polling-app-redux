import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthReducer";
import users from "../reducers/users";
import Polls from "../reducers/polls";
export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      auth: AuthReducer,
      users:users,
      polls:Polls
    },
  });

  return store;
}

