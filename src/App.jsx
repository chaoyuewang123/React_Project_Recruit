import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './containers/Register/register';
import Login from './containers/Login/login';
import Main from './containers/Main/main';
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Main/>}></Route>
            </Routes>
        </div>

    )
}
