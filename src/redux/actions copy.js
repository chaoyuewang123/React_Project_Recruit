
import { reqRegister, reqLogin, reqUpdateUser, reqUser, reqUserList,reqChatMsgList,reqReadMsg} from '../api/index'
import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, RECEIVE_USER_lIST,RECEIVE_MSG_lIST,RECEIVE_MSG } from './action-types'
import io from 'socket.io-client'

const auth_success = (user) => ({ type: AUTH_SUCCESS, data: user })

const error_msg = (msg) => ({ type: ERROR_MSG, data: msg })

const receive_user = (user) => ({ type: RECEIVE_USER, data: user })

const receive_user_list = (users) => ({ type: RECEIVE_USER_lIST, data: users })

export const reset_user = (msg) => ({ type: RESET_USER, data: msg })

const receive_msg_list = ({users,chatMsgs}) => ({ type: RECEIVE_MSG_lIST, data: {users,chatMsgs} })

const receive_msg = (chatMsgs)=>({type:RECEIVE_MSG,data:chatMsgs})


export const register = (user) => {
    const { Username, Password, ConPassword, type } = user

    if (Password !== ConPassword) {
        return error_msg('ConPassword is not same')
    }

    return async dispatch => {
        const reponse = await reqRegister({ Username, Password, type })
        const result = reponse.data
        if (result.code === 0) {
            getMsgList(dispatch,result._id)
            dispatch(auth_success(result.data))
            
        }
        else {
            dispatch(error_msg(result.msg))
        }
    }
}


export const login = (user) => {
    const { Username, Password } = user

    return async dispatch => {
        const reponse = await reqLogin({ Username, Password })
        const result = reponse.data
        if (result.code === 0) {
            getMsgList(dispatch,result._id)
            dispatch(auth_success(result.data))
        }
        else {
            dispatch(error_msg(result.msg))
        }
    }
}


export const updataUser = (user) => {
    return async dispatch => {
        const response = await reqUpdateUser(user)
        const result = response.data

        if (result.code === 0) {
            dispatch(receive_user(result.data))
        } else {
            dispatch(reset_user(result.msg))
        }
    }
}


export const getUser = () => {
    return async dispatch => {
        const response = await reqUser()
        const result = response.data
        if (result.code === 0) {
            getMsgList(dispatch,result._id)
            dispatch(receive_user(result.data))
        } else {
            dispatch(reset_user(result.msg))
        }
    }
}


export const getuserList = (type) => {
    return async dispatch => {
        const response = await reqUserList(type)
        const result = response.data

        if (result.code === 0) {
            
            dispatch(receive_user_list(result.data))
        }
        else {
            dispatch()
        }
    }
}





function initIO(dispatch,userid) {
    if(!io.socket){
         io.socket = io('ws://localhost:4001')

         io.socket.on('receiveMsg', function (chatMsgs) {
            if(userid === chatMsgs.from || userid === chatMsgs.to){
                dispatch(receive_msg(chatMsgs))
            }
        })
    }
   
 
}

async function getMsgList(dispatch,userid){
    initIO(dispatch,userid)
    const response = await reqChatMsgList()
    const result = response.data
    if(result.code === 0){
        const {users,chatMsgs} = result.data
        dispatch(receive_msg_list({users,chatMsgs}))
    }
}



export const sendMsg = ({ from, to, content }) => {
    return dispatch => {
        console.log({ from, to, content });

        io.socket.emit('sendMsg',{ from, to, content })
    }
}