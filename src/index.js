/* import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'


ReactDOM.render(<Button color='primary' fill='solid'>Test</Button>,document.getElementById('root')) */



import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App';
import './index.css'
import store from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
</Provider>

)