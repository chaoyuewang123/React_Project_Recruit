import React from 'react'
import {List,Grid,Image} from 'antd-mobile'
import {useNavigate } from 'react-router-dom' 

export default function Userlist(props) {
    const users = props.Userlist
    console.log(props);

    const navigate = useNavigate();
  return (
 

<List >
    <Grid columns={1} style={{marginTop:'50px'}}>
  {users.map((user) => (
    <List.Item
      key={user._id}
      title={user.Username}
      onClick={()=>{navigate('/chat/'+user._id)}}
      prefix={
        <Image
          src={require(`../../assets/Images/头像${user.Avatar.text}.png`)}
          style={{ borderRadius: 20 }}
        />
      } 
      description={(user.PersonalIntroduction ?"Introduction:" +user.PersonalIntroduction: '')   + (user.JobSearch ? "    Looking for: "+ user.JobSearch : '') +(user.Company ? "    Company: "+ user.Company : '')+(user.Salary ? "    Salary: "+ user.Salary : '')}
    >
    </List.Item>
    
  ))}

  </Grid>
</List>

  )
}
