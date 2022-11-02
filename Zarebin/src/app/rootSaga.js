import { fork } from "redux-saga/effects";
import resultSaga from "../features/component/Structure/saga";
export default function* roootSaga() {
  yield fork(resultSaga);
}
