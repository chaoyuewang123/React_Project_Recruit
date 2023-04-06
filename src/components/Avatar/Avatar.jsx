import React from 'react'
import { List,Grid,Image} from 'antd-mobile' 
import PropTypes, { func } from 'prop-types'




export default function Avatarinfor(props) {

/*     PropTypes = {
        setAvater:PropTypes.func.isRequired
    }
 */
    const AvatarList = [];

    for(let i = 0; i <20; i++){
        AvatarList.push({
            text:(i+1),
            icon:require(`../../assets/Images/头像${i+1}.png`)
        })
    }
    

    function handleAvatar2(val){
        return function(){
            props.setAvatar(val)
        }
        
    }
    const  listAvatar = !props.Avatar.icon ? 'please choose Avatar' : (
        <div>
            Choosed Avatar: <img src={props.Avatar.icon}/>
        </div>
    )
  return (

    <List header={listAvatar}>
        <Grid columns={5}>
      {AvatarList.map((AvatarL,index) => (
        <List.Item
          key={index}
          onClick={handleAvatar2(AvatarL)}
          prefix={
            <Image
              src={AvatarL.icon}
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
