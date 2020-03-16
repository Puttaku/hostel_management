const initState = {
    user : {}
}

export default (state = initState,action) => {
    switch(action.type){
        case 'LOGIN' : 
            return {user : action.payload || state}
        case "LOGOUT" :
            return {user:{}}
        default :
            return state
    }
}