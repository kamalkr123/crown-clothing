import { compose, createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "../sagas";
import createSagaMiddleware from "redux-saga";
import { reducers } from "../reducers";
import persistReducer from "redux-persist/es/persistReducer";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
