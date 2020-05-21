import axios from 'axios';
import {
    Message
} from 'element-ui';

// 创建axios实例
const service = axios.create({
    timeout: 100000
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent

    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (response.status !== 200 && res.status !== 200 && response.status !== 201) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            });
        } else {
            return response.data;
        }
    },
    error => {
        // console.log(error); // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;
