import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "../features/component/Structure/ResultSlice";
import createSagaMiddleware from "@redux-saga/core";
import roootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { result:resultReducer },
  middleware: [sagaMiddleware],
});
function configureAppStore() {
  sagaMiddleware.run(roootSaga);
  return { store };
}
export default configureAppStore;
