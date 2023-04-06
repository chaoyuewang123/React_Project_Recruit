import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-types'
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



export default combineReducers({
    user
})

