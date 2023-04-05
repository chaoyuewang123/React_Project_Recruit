import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom' 
import {NavBar, Form, Input,Radio,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import { register } from '../../redux/actions'
import Logo from '../../components/logo/logo'

function Register(props) {

  const navigate = useNavigate();
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [ConPassword, setConPassword] = React.useState("");
  const [type, settype] = React.useState('1');

 
  useEffect(() => {
    if (props.user.msg) {
      alert(props.user.msg)
    }else{
      const link = props.user.navigate
      navigate(link)
    }
  }, [props.user])

  function register1(){
    if(Username === ''){
      alert('Username cant be empty');
      return;
    }
    else if(Password === ''){
      alert('Password cant be empty');
      return;
    }
    else if(ConPassword === ''){
      alert('Password cant be empty');
      return;
    }
    else{
    const totalObj= {
      Username,
      Password,
      ConPassword,
      type
    }
    console.log(totalObj);
   
    props.register(totalObj)

    console.log(props.user);
/* 
    if(props.user.type===""){
      alert(props.user.msg)
    } */
  }
  }
  function handleUsername(value){
      setUsername(value)
  }

  function handlePassword(value){
    setPassword(value)
  }
  function handleConPassword(value){
    setConPassword(value)
  }
  function handleIdentity(value){
    settype(value)
  }

  function toLogin(){
    navigate('/login')
  }
  return (
    <div>
      <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>Recruit</NavBar>
      <Logo/>
      
      <Form layout='horizontal' mode='card' style={{border:'1px ridge', borderRadius:'12px',width:'90%',marginLeft:'5%'}}>
      <Form.Header />
        <Form.Item>
         <Input placeholder='Username' onChange={val=>{handleUsername(val)}} value={Username}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='Password' clearable type='password' onChange={val=>{handlePassword(val)}} value={Password}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='Confirm Password' clearable type='password' onChange={val=>{handleConPassword(val)}} value={ConPassword}/>
        </Form.Item>
        <Form.Item> 
          <Radio.Group  onChange={val=>{handleIdentity(val)}} value={type}>
            <Radio value='1'>Boos</Radio>&nbsp;
            <Radio value='2'>Candidates</Radio>
          </Radio.Group>
        </Form.Item> 
        <Button block color='primary' size='large' onClick={register1}>Register</Button>
        &nbsp;
      <Button block color='primary' size='large' onClick={toLogin}>Login</Button>
      </Form>
    </div>
  )
}


export default connect(state=>({user:state.user}),{register})(Register)