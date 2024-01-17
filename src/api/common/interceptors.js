import store from '@/store/store.js';

export function setInterceptors(instance){
    instance.interceptors.request.use(
        function(config){
            config.headers.common['x-access-token'] = store.accessToken;
            config.headers.common['x-refresh-token'] = store.refreshToken;
            return config;
        }
    )
}