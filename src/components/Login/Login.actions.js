import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants';

export const loginAction = {
    request: ({ username, password }) => ({
        type: LOGIN_REQUEST,
        dataL: { username, password }
    }),
    success: () => ({
        type: LOGIN_SUCCESS,
    }),
    failure: error => ({
        type: LOGIN_FAILURE,
        error,
    })
}