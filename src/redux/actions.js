
import {reqRegister,reqLogin,reqUpdateUser,reqUser, reqUserList} from '../api/index'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER,RECEIVE_USER_lIST} from './action-types'

const auth_success = (user) =>({type:AUTH_SUCCESS,data:user})

const error_msg = (msg) =>({type:ERROR_MSG,data:msg})

const receive_user = (user) =>({type:RECEIVE_USER, data:user})

const receive_user_list = (users) =>({type:RECEIVE_USER_lIST,data:users})

export const reset_user = (msg) =>({type:RESET_USER, data:msg})

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


export const updataUser = (user) =>{
    return async dispatch =>{
        const response = await reqUpdateUser(user)
        const result =response.data

        if(result.code===0){
            dispatch(receive_user(result.data))
        }else{
            dispatch(reset_user(result.msg))
        }
    }
}


export const getUser = () =>{
    return async dispatch =>{
        const response = await reqUser()
        const result =response.data
        if(result.code===0){
            dispatch(receive_user(result.data))
        }else{
            dispatch(reset_user(result.msg))
        }
    }
}


export const getuserList = (type)=>{
    return async dispatch =>{
        const response = await reqUserList(type)
        const result = response.data

        if(result.code===0){
            dispatch(receive_user_list(result.data))
        }
        else{
            dispatch()
        }
    }
}