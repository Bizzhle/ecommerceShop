import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// const reducers = combineReducers({
//   product: productReducer,
//   login: loginReducer,
// });

const rootReducer = combineReducers({
  product: productReducer,
  login: loginReducer,
});

// export default reducers;
export default persistReducer(persistConfig, rootReducer);
