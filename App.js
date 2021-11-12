import React from "react";
import Setup from "./src/boot/setup";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from 'redux'  
import reducer from "./reducers";
import axios from "axios";

import rootSaga from "./sagas/sagas";

axios.defaults.baseURL = 'http://localhost:8080/PeraRide/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    )
  }
}
