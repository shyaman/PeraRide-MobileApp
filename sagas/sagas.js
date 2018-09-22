import { put, takeEvery, all, call } from "redux-saga/effects";
import axios from "axios";
import deviceStorage from '../src/services/deviceStorage';


const setUsername = function* setUsername(action) {
  yield put({ type: "SET_USERNAME_STARTED", payload: action.payload });
};

const watchSetUsername = function* watchSetUsername() {
  yield takeEvery("SET_USERNAME", setUsername);
};

const setPassword = function* setPassword(action) {
  yield put({ type: "SET_PASSWORD_STARTED", payload: action.payload });
};

const watchSetPassword = function* watchSetPassword() {
  yield takeEvery("SET_PASSWORD", setPassword);
};

const watchLogin = function* watchLogin() {
  yield takeEvery("DO_LOGIN", function*(action) {
    yield put({ type: "DO_LOGIN_STARTED" });
    try {
      const loginData = yield call(attemptLogin);      
      if (loginData.res){
        deviceStorage.saveJWT(loginData.token);     
        yield put({ type: "DO_LOGIN_SUCCESS" });
      }
      else yield put({ type: "DO_LOGIN_FAILED" });
    } catch (error) {
      yield put({ type: "DO_LOGIN_FAILED" });
    }
  });
};


const rootSaga = function* rootSaga() {
  yield all([
    watchSetUsername(),
    watchSetPassword(),
    watchLogin()
  ]);
};

export default rootSaga;

const attemptLogin = () => {
  return axios.post("/user/login",{
    rider_regNo: 'E01001',
    rider_password: '951627940v'
  }).then(response => {
    return response.data;
  });
};
