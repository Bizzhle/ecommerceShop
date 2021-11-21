const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  const response = action.payload;

  switch (action.type) {
    case "login":
      return {
        ...state,
        isFetching: (state.isFetching = true),
      };

    case "loginSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        currentUser: response,
        error: (state.error = false),
      };

    case "loginFailure":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };
    case "logout":
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default reducer;
