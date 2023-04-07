import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Avatarinfor from '../../components/Avatar/Avatar'
import {NavBar,Input,TextArea,Button,Form} from 'antd-mobile'
import {updataUser} from '../../redux/actions'



 function Candidate(props) {

  const navigate = useNavigate();

  const [JobSearch, setJobSearch] = React.useState("");
  const [PersonalIntroduction, setPersonalIntroduction] = React.useState("");
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

  function handleSave(){
    const totalObj = {
      Avatar:Avatar,
      JobSearch,
      PersonalIntroduction
    }
    console.log(totalObj);
    props.updataUser(totalObj);
  }


  function handleJobSearch(val){
    setJobSearch(val)
  }


  function handlePersonalIntroduction(val){
    setPersonalIntroduction(val)
  }

  function handleAvater(Avatar){
    setAvatar(Avatar)
  }

  return (
    <div>
      <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>Candidate Information</NavBar>
      <Avatarinfor setAvatar={handleAvater} Avatar={Avatar}/>

      <Form layout='horizontal' mode='card'>
          <Form.Item label='Job Search' name='JobSearch'>
          <Input onChange={val=>{handleJobSearch(val)}} value={JobSearch}/>
          </Form.Item>
          <Form.Item label='Personal Introduction' name='PersonalIntroduction'>
            <TextArea  rows={5} onChange={val=>{handlePersonalIntroduction(val)}} value={PersonalIntroduction}/>
          </Form.Item>

        </Form>
        <Button block color='primary' size='large' onClick={handleSave}>Save</Button>
    </div>
  )
}

export default connect(state=>({user:state.user}),{updataUser})(Candidate)