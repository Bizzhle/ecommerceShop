import jwtDecode from "jwt-decode";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.currentUser = decodedToken;
  }
}
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
