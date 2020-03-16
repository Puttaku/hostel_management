export const userLogin = (data) => dispatch =>{
    return dispatch ({
        type : 'LOGIN',
        payload : data
    })
}
export const userLogout = () => dispatch =>{
    return dispatch ({
        type : 'LOGIN',
        payload : null
    })
}