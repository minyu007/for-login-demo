import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './constants';

const initialState = { isRequest: false, error: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                isRequest: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                isRequest: false,
            };
        case LOGIN_FAILURE:
            return {
                isRequest: false,
                error: action.error
            };
        default:
            return state;
    }
}