import React from 'react'
import {useNavigate } from 'react-router-dom' 
import {NavBar, Form, Input,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default function Register() {

  const navigate = useNavigate();
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [ConPassword, setConPassword] = React.useState("");
  const [Identity, setIdentity] = React.useState('1');

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
      Identity
    }
    console.log(totalObj);
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
    setIdentity(value)
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
          <Radio.Group  onChange={val=>{handleIdentity(val)}} value={Identity}>
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
