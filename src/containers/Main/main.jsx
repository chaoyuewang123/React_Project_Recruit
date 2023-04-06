import React,{useEffect}from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';

 function Main(props) {
  const navigate = useNavigate();
  useEffect(() => {

    if(!props.user._id){
      navigate('/login')
    }
/*     const {Avatar,type} = props.user
    if(Avatar){
      if(type === '1'){
        navigate('/boss')
      }
      else{
        navigate('/candidate')
      }
    } */
   
  }, [props.user]);

  return (
    <div>
    </div>
  )
}
export default connect(state=>({user:state.user}))(Main)