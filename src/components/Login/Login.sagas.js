import { all, put, takeLatest, call } from 'redux-saga/effects';

import { LOGIN_REQUEST } from './constants';
import { loginAction } from './Login.actions';
import { doLogin } from '../../lib/api';

function* processLogin(payload) {
    const { username, password } = payload.data
    try {
        const { data } = yield call(processLogin);
        yield put(loginAction.success());
    } catch (err) {
        yield put(loginAction.failure({ ...err }))
    }

}

export default function* watchLogin() {
    yield all([takeLatest(LOGIN_REQUEST, processLogin)]);
}