import { LOGIN_STUDENT, LOGIN_ERROR } from '../types';
const initialState = {
    student: [],
    status:404,
    loading: true
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STUDENT:
            return {
                ...state,
                student: action.payload,
                status:200,
                loading: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                student: action.payload,
                status:404,
                loading: false
            }
        default:
            return state;
    }
}