import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RECEIVE_USER_lIST,RESET_USER} from './action-types'
import {getnavigate} from '../utils/index'


const initUser ={
    Username:'',
    type:'',
    msg:'',
    navigate:''
}

function user(state=initUser,action){
    
    switch(action.type){
        case AUTH_SUCCESS:
            const {type,Avatar} = action.data
            return {...action.data,navigate:getnavigate(type,Avatar)}
        case ERROR_MSG:
            return  {...state, msg: action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}

const initUserList=[]
function userList(state=initUserList,action){
    switch (action.type){
        case RECEIVE_USER_lIST:
            return action.data
        default:
            return state
    }
}


export default combineReducers({
    user,
    userList
})

