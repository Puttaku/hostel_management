export const userLogin = (data) => {
    return {
        type : 'LOGIN',
        payload : data
    }
}
export const userLogout = () => {
    return {
        type : 'LOGOUT',
        payload : null
    }
}