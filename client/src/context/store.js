// // import { configureStore } from "@reduxjs/toolkit";
// // import cartReducer from "./cartRedux";
// import reducers from "./reducers";
// import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// // import { composeWithDevTools } from "redux-devtools-extension";

// // export const store = configureStore({
// //   // reducers,
// //   reducer: {
// //     cart: cartReducer,
// //   },
// // });

// export const store = createStore(reducers, {}, applyMiddleware(thunk));
import reducers from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default { store, persistor };
