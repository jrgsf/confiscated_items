import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import configureStore from "./redux/store/configureStore";
import history from "./history";

const initialState = {};
const store = configureStore(initialState);
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="//" component={Main} />
    </div>
  </Router>
);

export default AppRouter;

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
