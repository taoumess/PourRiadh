import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,



 } from "../actions/types";
let initState = {
    token:localStorage.getItem('token'),
    user:null,
    isAuth:false,
    errors:null,
}



const AuthReducer = (state = initState,action)=>{
    switch (action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token:action.payload.token,
                isAuth:true,
                errors:null,
            };
            case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
            
                isAuth:true,
                errors:action.payload,
            };
        default:
            return state;
    }
}
export default AuthReducer