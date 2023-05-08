import { all, call } from "redux-saga/effects";
import UserSaga from "../sagas/UserSaga";
import CategoriesSaga from "./CategoriesSaga";

export function* rootSaga() {
  yield all([call(UserSaga), call(CategoriesSaga)]);
}
