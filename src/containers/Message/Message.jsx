import React from 'react'
import {connect} from 'react-redux'


 function Message() {
  return (
    <div>Message</div>
  )
}
export default connect(state=>({}),{})(Message)