import { all, takeLatest } from 'redux-saga/effects';
// import userSagas from './user';
import getUsers from "./user";

function* userSagas() {
  yield all([
    yield takeLatest('GET_USERS_REQUEST', getUsers)
  ])
 
}

export default userSagas;