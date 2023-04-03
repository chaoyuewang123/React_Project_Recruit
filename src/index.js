/* import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'


ReactDOM.render(<Button color='primary' fill='solid'>Test</Button>,document.getElementById('root')) */



import React from 'react'
import { createRoot } from 'react-dom/client';
import {Button} from 'antd-mobile'
import './index.css'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<Button block color='primary' size='large'>Test</Button>
)