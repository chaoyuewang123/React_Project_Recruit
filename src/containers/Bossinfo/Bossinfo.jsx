import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {NavBar,Input,TextArea,Button,Form} from 'antd-mobile'
import Avatarinfor from '../../components/Avatar/Avatar'
import {updataUser} from '../../redux/actions'

 function Boss(props) {

  const navigate = useNavigate();

  const [Position, setPosition] = React.useState("");
  const [Company, setCompany] = React.useState("");
  const [Salary, setSalary] = React.useState("");
  const [Required, setRequired] = React.useState("");
  const [Avatar, setAvatar] = React.useState("");


  useEffect(() => {
    const {Avatar,type} = props.user
    if(Avatar){
      if(type === '1'){
        navigate('/boss')
      }
      else{
        navigate('/candidate')
      }
    }
   
  }, [props.user]);

  function savedata(){

    const totalObj = {
      Avatar:Avatar,
      Position,
      Company,
      Salary,
      Required
    }
    console.log(props);
    console.log(totalObj);
    props.updataUser(totalObj);
  }
  
  function handleAvater(Avatar){
    setAvatar(Avatar);
  }

  function handlePosition(val){
    setPosition(val)
  }

  function handleCompany(val){
    setCompany(val)
  }

  function handleSalary(val){
    setSalary(val)
  }

  function handleRequired(val){
    setRequired(val)
  }

  return (
    <div>
      <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>Boss Information</NavBar>
      <Avatarinfor setAvatar={handleAvater} Avatar={Avatar}/>
    {/*   Recruiting position: <Input placeholder='' clearable /> */}
      <Form layout='horizontal' mode='card'>
          <Form.Item label='Position' name='Recruitingposition'>
          <Input onChange={val=>{handlePosition(val)}} value={Position}/>
          </Form.Item>
          <Form.Item label='Company' name='Company'>
            <Input onChange={val=>{handleCompany(val)}} value={Company}/>
          </Form.Item>
          <Form.Item label='Salary' name='Salary'>
          <Input onChange={val=>{handleSalary(val)}} value={Salary}/>
          </Form.Item>
          <Form.Item label='Required' name='Required'>
            <TextArea  title="aaa" rows={5} onChange={val=>{handleRequired(val)}} value={Required}/>
          </Form.Item>

        </Form>
        <Button  block color='primary' size='large' onClick={savedata}>Save</Button>
    </div>
  )
}


export default connect(state=>({user:state.user}),{updataUser})(Boss)