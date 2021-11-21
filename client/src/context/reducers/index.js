// import { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

// const reducers = combineReducers({
//   cart: cartReducer,
//   login: loginReducer,
// });

// export default reducers;
export default persistReducer(persistConfig, rootReducer);
