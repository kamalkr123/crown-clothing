import { takeLatest, put, all, call } from "redux-saga/effects";
import { getCategoriesAndDocument } from "../Utils/Firebase/FirebaseUtils";
import { CATEGORIES_ACTION_TYPE } from "../types/CategoriesType";
import { getCategoriesSucces } from "../actions/CategoriesAction";

export function* fetchCategoriesFromFirebase() {
  try {
    const categoryMap = yield call(getCategoriesAndDocument);
    yield put(getCategoriesSucces(categoryMap));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.CATEGORIES_MAP,
    fetchCategoriesFromFirebase
  );
}

export default function* CategoriesSaga() {
  yield all([call(onFetchCategories)]);
}
