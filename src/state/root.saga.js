import {all} from 'redux-saga/effects';
import requestSaga from './request.saga';

export default function* rootSaga() {
  yield all([requestSaga()]);
}
