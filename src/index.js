// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reducers from "./reducers";

// just bring in sdome intial data to seed the app
import initialState from "./data/initialState";

const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById("root");

if (node1) {
  ReactDOM.render(
    <Router>
      <App store={store} />
    </Router>,
    node1
  );
}
registerServiceWorker();
