import React,{useEffect}from 'react'
import { connect } from 'react-redux'
import { useNavigate,useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';
import {getnavigate} from '../../utils/index'
import { getUser } from '../../redux/actions'; 

 function Main(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {


    const userid = Cookies.get('userid')

    if(!userid){
      return navigate('/login')
    }

    const {user} = props


    if(!user._id){
      if(userid){
        props.getUser()
      }
    }
    else{
      if(pathname === '/'){
        const path = getnavigate(user.type,user.Avatar)
        console.log(path);
        navigate(path)
      }
    }
    
/*     if(!props.user._id){
      navigate('/login')
    } */
/*     const {Avatar,type} = props.user
    if(Avatar){
      if(type === '1'){
        navigate('/boss')
      }
      else{
        navigate('/candidate')
      }
    } */
  }, [props.user,navigate]);



  return (
    <div>
    </div>
  )
}
export default connect(state=>({user:state.user}),{getUser})(Main)