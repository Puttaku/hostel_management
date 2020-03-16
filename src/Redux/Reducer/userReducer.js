export default (state,action) => {
    switch(action.type){
        case 'LOGIN' : 
            return state
        case "LOGOUT" :
            return state + action
        default :
            return null
    }
}