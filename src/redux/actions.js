
import {reqRegister,reqLogin} from '../api/index'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'

const auth_success = (user) =>({type:AUTH_SUCCESS,data:user})

const error_msg = (msg) =>({type:ERROR_MSG,data:msg})

export const register = (user) =>{
    const {Username, Password,ConPassword,type} = user

    if(Password!==ConPassword){
        return error_msg('ConPassword is not same')
    }

    return async dispatch => {
        const reponse = await reqRegister({Username,Password,type})
        const result = reponse.data
        if(result.code===0){
            dispatch(auth_success(result.data))
        }
        else{
            dispatch(error_msg(result.msg))
        }
    }
}


export const login = (user) =>{
    const {Username, Password} = user

    return async dispatch => {
        const reponse = await reqLogin({Username,Password})
        const result = reponse.data
        if(result.code===0){
            dispatch(auth_success(result.data))
        }
        else{
            dispatch(error_msg(result.msg))
        }
    }
}