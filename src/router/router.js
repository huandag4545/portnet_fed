import VueRouter from 'vue-router'
import MainView from '../views/main/MainView.vue'
import LoginView from '../views/login/LoginView.vue'
import JoinView from '../views/join/JoinView.vue'
import Vue from 'vue'


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: "home",
        component: MainView
    },
    {
        path: '/loginpage',
        name: "loginpage",
        component: LoginView
    },
    {
        path: '/join',
        name: "join",
        component: JoinView
    }

];


export default new VueRouter({
    mode: 'history',
    routes
});



