import axios from 'axios';
import { LOGIN_STUDENT, LOGIN_ERROR } from '../store';
const BASE_URL = "http://localhost:5000/student/signin";
// const url = "https://jsonplaceholder.typicode.com/posts";


// const instance=axios.create({
//     baseURL:url,
//     headers:{
//         'Content-Type':'application/json',
//         'Acess-Control-Allow-Origin':'*',
//         'Accept': "application/json"
//         }
//     })
// const request = axios({
//     method: 'POST',
//     url: `${BASE_URL}/student/signin`,
//     headers: []
//   });
    
export const studentLogin = async (studentInfo) => await axios.post(BASE_URL, studentInfo);
// export const getCookie = async () => await axios.get();