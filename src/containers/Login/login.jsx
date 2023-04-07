import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom' 
import {NavBar, Form, Input,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import { login } from '../../redux/actions'

import Logo from '../../components/logo/logo'
 

function Login(props) {

  const navigate = useNavigate();

  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");

  useEffect(() => {
    if (props.user.msg) {
      alert(props.user.msg)
    }else{
      const link = props.user.navigate
      navigate(link)
    }
  }, [props.user.msg])


  function Login1(){
    if(Username === ''){
      alert('Username cant be empty');
      return;
    }
    else if(Password === ''){
      alert('Password cant be empty');
      return;
    }
    else{
    const totalObj= {
      Username,
      Password,
    }
    console.log(totalObj);

    

    if (props.user.msg) {
      alert(props.user.msg)
    }else{
      const link = props.user.navigate
      navigate(link)
    }
    props.login(totalObj)
  }
  }
  function handleUsername(value){
      setUsername(value)
  }

  function handlePassword(value){
    setPassword(value)
  }

  function toRegister(){
    navigate('/register')
  }

  return (
    <div>
      <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>Recruit</NavBar>
      <Logo/>
      {props.user.msg ? <div className='error-msg'>{props.user.msg}</div> : null}
      <Form layout='horizontal' mode='card' style={{border:'1px ridge', borderRadius:'12px',width:'90%',marginLeft:'5%'}}>
      <Form.Header />
        <Form.Item>
         <Input placeholder='Username' onChange={val=>{handleUsername(val)}} value={Username}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='Password' clearable type='password' onChange={val=>{handlePassword(val)}} value={Password}/>
        </Form.Item>
        <Button block color='primary' size='large' onClick={Login1}>Login</Button>
        &nbsp;
      <Button block color='primary' size='large' onClick={toRegister}>Creat A New Account</Button>
      </Form>
    </div>
  )
}
export default connect(state=>({user:state.user}),{login})(Login)
