import instance from './request'
export const getUserList = () => {
    return instance({
        method: 'GET',
        url: '/user/getList',
    })
}