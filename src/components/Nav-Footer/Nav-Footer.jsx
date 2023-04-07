import React from 'react'
import { TabBar,List,Grid,Image} from 'antd-mobile'
import {useNavigate} from 'react-router-dom' 
import {
    AppOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
  } from 'antd-mobile-icons'



export default function NavFooter(props) {

const {navList} = props
const navigate = useNavigate();


if(navList[0].text === 'candidate'){
  navList[0].icon=<AppOutline />
}
else{
  navList[0].icon=<UnorderedListOutline />
}
navList[1].icon=<MessageFill />
navList[2].icon=<UserOutline />

return (


  
/*     <TabBar style={{position:'fixed',bottom:'0',width:'100%',height: 'inherit'}}>
      {navList.map((nav) => {
        return (
          <TabBar.Item 
            key={nav.path}
            icon={nav.icon}
            title={nav.title}
            onClick={()=>{alert(1)}}
          />
        )
      })}
    </TabBar> */

<List style={{position:'fixed',bottom:'0',width:'100%',height: 'inherit'}} >
    <Grid columns={3} gap={1}>
  {navList.map((nav) => (
    <List.Item
      key={nav.path}
      onClick={()=>{navigate(nav.path)}}
      prefix={
        <Image
          src={require(`../../assets/nav/${nav.text}.png`)}
          style={{ borderRadius: 20 }}
        />
      }
    >
    </List.Item>
  ))}
  </Grid>
</List>
  )
}