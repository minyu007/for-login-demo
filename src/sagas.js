import { all, fork } from 'redux-saga/effects';

import watchLogin from './components/Login/Login.sagas';

export default function* root() {
  yield all([
    fork(watchLogin),
  ]);
}
