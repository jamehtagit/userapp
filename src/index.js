import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//import {createStore,combineReducers} from "redux";
import { createStore } from "redux";
import rootreducers from "./reducers";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//const store = createStore(combineReducers({user:rootreducers}))

const store = createStore(rootreducers);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
