import axios from 'axios';
// import { setInterceptors } from './common/interceptors.js'

const baseUrl = 'http://localhost:8090/api'

// function createInstance(){
//     const instance = axios.create({
//         baseURL: baseUrl,
//     });
//     return setInterceptors(instance);
// }

// const instance = createInstance();

// 회원가입

function getUser() {
    return axios.get(baseUrl + '/join');
}

//회원가입
function insertUser(data) {
    return axios.post(baseUrl + '/join', data);
}

function checkUsername(data) {
    return axios.post(baseUrl + "/join/checkUserName", data);
}

export {
    insertUser,
    getUser,
    checkUsername
}
