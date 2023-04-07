import React from 'react'
import {List,Grid,Image} from 'antd-mobile'

export default function Userlist(props) {
    const users = props.Userlist
    console.log(props);
  return (
 

<List>
    <Grid columns={1}>
  {users.map((user) => (
    <List.Item
      key={user._id}
      title={user.Username}
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
