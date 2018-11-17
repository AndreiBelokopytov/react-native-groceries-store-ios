import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers, install as installReduxLoop } from "redux-loop";
import { createLogger } from "redux-logger";
import catalogReducer from "./reducers/catalogReducer";
import profileReducer from "./reducers/profileReducer";

const reducer = combineReducers({
  catalog: catalogReducer,
  profile: profileReducer
});

const logger = createLogger({
  duration: true,
  collapsed: true
});

const store = createStore(
  reducer,
  compose(
    installReduxLoop(),
    applyMiddleware(logger)
  )
);

export default store;
