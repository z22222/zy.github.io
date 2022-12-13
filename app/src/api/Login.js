import instance from "../http/request";
export const Login = (params) => {
    return instance({
        method: 'GET',
        url: '/login',
        params
    })
}