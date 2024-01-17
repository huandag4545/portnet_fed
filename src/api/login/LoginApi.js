import axios from 'axios';
// import { setInterceptors } from './common/interceptors.js'

//const baseUrl = 'http://localhost:8090/api'

// 로그인
//로그인
function login(data) {
    console.log("api타는지" + JSON.stringify(data));
    return axios.post('/api/login', data);
}

export { login }