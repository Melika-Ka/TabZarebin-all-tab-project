import { takeEvery, call, put } from "redux-saga/effects";
import { RESULT_ACTION } from "./action";
import { getApi } from "./api";
import { getResultsList } from "./ResultSlice";

function* handlingResultAction(action) {
  const dataFromCallingAction = yield call(getApi, action.payload);
  yield put(getResultsList(dataFromCallingAction));
}
function* resultSaga() {
  yield takeEvery(RESULT_ACTION, handlingResultAction);
}
export default resultSaga;
