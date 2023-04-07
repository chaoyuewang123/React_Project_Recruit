import React from 'react'
import { Button } from 'antd-mobile'
import { useNavigate} from 'react-router-dom';


export default function Notfound() {
    const navigate = useNavigate();

    function gomain(){
        navigate('/')
    }
  return (
    <div>
        <h2>Not Found</h2>
        <Button color='primary' fill='solid' onClick={gomain}> Go to home page</Button>
    </div>
  )
}
