import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "../CRUD/UserReducers";
const Store = configureStore({
  reducer: {
    users: UserReducers,
  },
});
export default Store;
