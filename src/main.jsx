import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App.jsx";
import "./common/Reset/index.scss";
import "./index.scss";

// import store from './common/Store';
import ErrorBoundary from "./common/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      { /* <Provider store={store}> */ }
      <App />
      { /* </Provider> */ }
    </ErrorBoundary>
  </React.StrictMode>,
);
