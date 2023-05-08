import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  loginFromGoogleSuccess,
  setLoading,
  emailSignInSuccess,
} from "../actions/UserActions";
import { USER_ACTION_TYPES } from "../types/UserTypes";

import {
  signInWithGooglePopup,
  getCurrentUser,
  createUserDocumentAuth,
} from "../Utils/Firebase/FirebaseUtils";

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  // if (!userAuth) {
  //   yield put(setLoading(false));
  // }
  try {
    const userDocRef = yield call(
      createUserDocumentAuth,
      userAuth,
      additionalInfo
    );
    yield put(emailSignInSuccess(userDocRef));
  } catch (error) {}
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {}
}

export function* loginWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
    // yield put(loginFromGoogleSuccess, user);
  } catch (e) {}
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onStartGoogleLogin() {
  yield takeLatest(USER_ACTION_TYPES.LOGIN_WITH_GOOGLE, loginWithGoogle);
}

export default function* UserSaga() {
  yield all([call(onCheckUserSession), call(onStartGoogleLogin)]);
}
