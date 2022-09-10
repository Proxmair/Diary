import { configureStore } from "@reduxjs/toolkit";
import { authReducer,userReducer} from "./reducers/user.js";

const store = configureStore({
  reducer: {
    user:userReducer,
    login: authReducer,
  },
});

export default store;
