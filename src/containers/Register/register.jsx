import React from 'react'
import {NavBar, Form, Input,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default function Register() {

  function register1(){
    console.log(11)
  }

  return (
    <div>
      <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>Recruit</NavBar>
      <Logo/>
      
      <Form layout='horizontal' mode='card' style={{border:'1px ridge', borderRadius:'12px',width:'90%',marginLeft:'5%'}}>
      <Form.Header />
        <Form.Item>
         <Input placeholder='Username' />
        </Form.Item>
        <Form.Item>
          <Input placeholder='Password' clearable type='password'/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='Confirm Password' clearable type='password'/>
        </Form.Item>
        <Form.Item> 
          <Radio.Group>
            <Radio value='1'>Boos</Radio>&nbsp;
            <Radio value='2'>Candidates</Radio>
          </Radio.Group>
        </Form.Item> 
        <Button block color='primary' size='large' onClick={register1}>Register</Button>
        &nbsp;
      <Button block color='primary' size='large'>Login</Button>
      </Form>
    </div>
  )
}
