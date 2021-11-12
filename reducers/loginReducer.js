export default function reducer(
  state = {
    username: "",
    password: "",
    loginStatus: "uninitiated"
    },
  action
) {
  switch (action.type) {
    case "SET_USERNAME_STARTED": {
      return { ...state, username: action.payload };
      break;
    }
    case "SET_PASSWORD_STARTED": {
      return { ...state, password: action.payload };
      break;
    }
    case "DO_LOGIN_STARTED": {
      return { ...state, loginStatus: "ongoing" };
      break;
    }
    case "DO_LOGIN_SUCCESS": {
      return { ...state, loginStatus: "success"};
      break;
    }
    case "DO_LOGIN_FAILED": {
      return { ...state, loginStatus: "failed" };
      break;
    }
    default: {
      return state;
    }
  }
}
