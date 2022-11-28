import * as api from '../api';
import { LOGIN_STUDENT, LOGIN_ERROR } from '../types'
export const studentLogin = (studentInfo) => async dispatch => {
    try {
        const res = await api.studentLogin(studentInfo);
        dispatch({type: LOGIN_STUDENT, payload: res.data});
    } catch (error) {
        dispatch({type: LOGIN_ERROR , payload: console.log(error)});
    }
}