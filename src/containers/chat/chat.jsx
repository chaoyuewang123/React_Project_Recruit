import React,{useEffect}from 'react'
import { connect } from 'react-redux'
import { NavBar, Input, List, Image } from 'antd-mobile'
import { useMatch } from 'react-router-dom';
import {sendMsg} from'../../redux/actions'


function Chat(props) {



    const match = useMatch('/chat/:userid');

    const [content, setcontent] = React.useState("");

    function handleSend(){
        const from = props.user._id;
        const to = match.params.userid
        props.sendMsg({from,to,content})
        setcontent('')

    }
    

    const {user} = props
    const {users,chatMsgs} = props.chat
    const meId = user._id
    if(!meId){
        return null
    }
    console.log(props);
    const targeId = match.params.userid
    const chat_id = [meId,targeId].sort().join('_')
    const msgs = chatMsgs.filter(msg => msg && msg.chat_id === chat_id)


    const targetavater= users[targeId].Avatar.text

    const targetico =targetavater ? require(`../../assets/Images/头像${targetavater}.png`) : null


    return (
        <div id='chat-page'>
            <NavBar style={{zIndex:'10',position:'fixed',width:'100%', backgroundColor: '#1DA57A'}}>aa</NavBar>
            <List  style={{paddingTop:'50px',paddingBottom:'50px'}}>

                {
                    msgs.map(msg =>{
                        if(targeId===msg.from){
                            return(
                                <List.Item
                                key={msg._id}
                                prefix={
                                    <Image
                                        src={targetico}
                                        style={{ borderRadius: 20 }}
                                    />
                                }
                            >
                                {msg.content}
                            </List.Item>
                            )
                        }else{
                            return(
                                <List.Item
                                key={msg._id}
                                className='chat-me'
                                extra='me'
                                style={{ flexBasis: 'auto', paddingRight:'15px', textAlign:'right'}}
                            >
                                {msg.content}
                            </List.Item>
                            )
                        }
                    })

                }

            </List>
            <div className='am-tab-bar' >
                <Input
                    placeholder="请输入"
                    style={{position:'fixed',bottom:'0', backgroundColor:'	#DCDCDC',width:'90%',height:'50px'}}
                    onChange={val=>{setcontent(val.trim())}}
                    value={content}
                />
                <button 
                style={{position:'fixed',right:'0',bottom:'0',backgroundColor:'white',width:'10%',height:'50px'}}
                onClick={handleSend}
                
                >Send</button>
            </div>
        </div>
    )
}





export default connect(state => ({user:state.user,chat:state.chat}), {sendMsg})(Chat)