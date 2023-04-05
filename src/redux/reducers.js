import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from './action-types'


const initUser ={
    Username:'',
    type:'',
    msg:'',
    navigate:''
}

function user(state=initUser,action){
    
    switch(action.type){
        case AUTH_SUCCESS:
            return {...action.data,navigate:"/"}
        case ERROR_MSG:
            return  {...state, msg: action.data}
        default:
            return state
    }
}



export default combineReducers({
    user
})