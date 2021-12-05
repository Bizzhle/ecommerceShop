import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
