import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './containers/Register/register';
import Login from './containers/Login/login';
import Main from './containers/Main/main';
import Bossinfo from './containers/Bossinfo/Bossinfo'
import Candidateinfo from './containers/Candidateinfo/Candidateinfo'
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Main/>}></Route>
                <Route path='/bossinfo' element={<Bossinfo/>}></Route>
                <Route path='/candidatesinfo' element={<Candidateinfo/>}></Route>
            </Routes>
        </div>

    )
}
