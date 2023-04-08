import React from 'react'
import {connect} from 'react-redux'
import { Result,Grid ,List,Button,Dialog} from 'antd-mobile'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import {reset_user} from '../../redux/actions'

function Personalinfor(props) {
    const navigate = useNavigate();

    const {Usename,Avatar,Position,Required,Company,Salary,JobSearch,PersonalIntroduction} = props.user

  /*   icon={<img src={require(`../../assets/Images/头像${Avatar.text}.png`)} />} */
  return (
    <div >
    <Result
    style={{paddingTop:'50px'}}
    icon={<img src={require(`../../assets/Images/头像${Avatar.text}.png`)} />}
    title={Usename}
    description={Company}
    
  />
  <List header='基础用法'>
  <Grid columns={1}>
    <br />
  {Required ?  <Grid.Item >Required:{Required}</Grid.Item> : null}

  {Position ?  <Grid.Item >Position:{Position}</Grid.Item> : null}

  {Salary ?  <Grid.Item >Salary:{Salary}</Grid.Item> : null}

  {JobSearch ?  <Grid.Item >JobSearch:{JobSearch}</Grid.Item> : null}

  {PersonalIntroduction ?  <Grid.Item >PersonalIntroduction:{PersonalIntroduction}</Grid.Item> : null}
<br />
  </Grid>
  
</List>
<br />
<br />
<br />
<Button block color='danger' size='large' onClick={() => Dialog.confirm({
                content: 'Log Out',
                onConfirm:  () => {
                  Cookies.remove('userid')
                  props.reset_user();
                  navigate('/login')
                },
              })
            }> Log out</Button>


</div>
  )
}
export default connect(state=>({user:state.user}),{reset_user})(Personalinfor)