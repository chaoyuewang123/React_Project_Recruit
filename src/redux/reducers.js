import {combineReducers} from 'redux'
import {AUTH_SUCCESS,
    ERROR_MSG,RECEIVE_USER,
    RECEIVE_USER_lIST,
    RESET_USER,
    RECEIVE_MSG_lIST,
    RECEIVE_MSG
} from './action-types'
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

const initChat ={
    users:{},
    chatMsgs:[],
    unReadCount:0
}

function chat(state=initChat,action){
    switch(action.type){
        case RECEIVE_MSG_lIST:
            const {users,chatMsgs} = action.data
            return {
                users,
                chatMsgs,
                unReadCount:0
            }
        case RECEIVE_MSG:
            return{
                users:state.users,
                chatMsgs:[...state.chatMsgs, action.data.chatMsgs],
                unReadCount:0
            }
        default:
            return state
    }
}


export default combineReducers({
    user,
    userList,
    chat
})

