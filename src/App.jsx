import { NavBar } from 'antd-mobile';
import { Routes, Route ,useLocation,useNavigate} from 'react-router-dom'
import Register from './containers/Register/register';
import Login from './containers/Login/login';
import Main from './containers/Main/main';
import Bossinfo from './containers/Bossinfo/Bossinfo'
import Candidateinfo from './containers/Candidateinfo/Candidateinfo'
import Boss from './containers/Boss/Boss';
import Message from './containers/Message/Message';
import Candidate from './containers/Candidate/Candidate';
import Notfound from './components/notfound/Notfound';
import Personalinfor from './containers/Personalinfor/Personalinfor';
import NavFooter from './components/Nav-Footer/Nav-Footer';
import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './redux/actions'; 



 function App(props) {
    const location = useLocation();
    const { pathname } = location;
  
  
   let navList = [
        {
            path: '/boss', 
            component: Boss,
            title: 'candidate list',
            icon: 'candidate',
            text: 'candidate',
        },
        {
            path: '/candidate', 
            component: Candidate,
            title: 'boss list',
            icon: 'boss',
            text: 'boss',
        },
        {
            path: '/message', 
            component: Message,
            title: 'Message',
            icon: 'message',
            text: 'message',
        },
        {
            path: '/personalinfor', 
            component: Personalinfor,
            title: 'Personal infor',
            icon: 'personalinfor',
            text: 'personalinfor',
        }
    ]

    if(props.user.type==='1'){
      navList[1].hide = true
    }
    else{
      navList[0].hide = true
    }
  
    const newnavList = navList.filter(nav =>nav.hide!==true)




    const currentNav = navList.find(nav=>nav.path===pathname)

    return (
        <div>
            {currentNav ?  <NavBar style={{ backgroundColor: '#1DA57A' }} back={null}>{currentNav.title}</NavBar> : null}
           
            <Routes>
                {
                    navList.map(nav=> <Route key={nav.path} path={nav.path} element={<nav.component/>}></Route>)
                }
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Main />}></Route>
                <Route path='/bossinfo' element={<Bossinfo />}></Route>
                <Route path='/candidateinfo' element={<Candidateinfo />}></Route>
                <Route path='/notfound' element={<Notfound />}></Route>
            </Routes>
            {currentNav ? <NavFooter navList={newnavList} />  : null}
        </div>

    )
}
export default connect(state=>({user:state.user}),{getUser})(App)