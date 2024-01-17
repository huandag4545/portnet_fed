/**
 * 로그인  Token 관련 Store
 * 
*/

import * as axios from '../api/login/LoginApi.js'
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state(){
        return {
            accessToken: '',
            refreshToken: '',
            username: '',
            nickname: ''
        }
    },
    getters:{
        isLogin(state){
            if(state.accessToken != '' && state.refreshToken != ''){
                return true;
            }
            return false;
        }
    },
    actions: {
        loginAction({commit},payload){
     
            axios.login(payload)
            .then(response => {
                if(response.status === 200){
                    let getAccessToken = response.headers['ACCESTOKEN'];
                    let getReshToken = response.headers['REFRESHTOKEN'];
                    let getNickname = response.headers['NICKNAME'];
                    let getUsername = response.headers['USERNAME'];
                    console.log("userInfo" + getAccessToken + "/" + getReshToken + "/" + getNickname + "/" + getUsername);
                    commit('setAccessToken', getAccessToken);
                    commit('setRefreshToken', getReshToken);
                    commit('setUsername', getUsername);
                    commit('setNickname', getNickname);
                }
            })
            .catch(error => alert(error.response.data.errorMessage) )
        },
        logoutAction({commit}){
            commit('clearToken')
        }
    },
    mutations:{
        setAccessToken(state, data){
            state.accessToken = data;
            console.log(state.accessToken);
        },
        setRefreshToken(state, data){
          state.refreshToken = data;

        },
        setUsername(state, data){
            state.username = data;
        },
        clearInfo(state){
            state.accessToken = '';
            state.username = '';
            state.nickname = '';
        },
        setNickname(state,data){
            state.nickname = data;
        }
    }
});