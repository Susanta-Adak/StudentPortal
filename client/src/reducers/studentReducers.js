import { LOGIN_STUDENT, LOGIN_ERROR } from '../types';
const initialState = {
    student: [],
    loading: true
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STUDENT:
            return {
                ...state,
                student: action.payload,
                loading: false
            }
        default:
            return state;
    }
}