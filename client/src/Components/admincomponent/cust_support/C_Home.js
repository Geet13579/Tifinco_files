import React, { Component } from 'react'

import C_Header from './C_Header'
import C_Main from './C_Main'
import C_Footer from './C_Footer'

export class C_Home extends Component {
  render() {
    return (
      <div>
        <C_Header/>
        <C_Main/>
        <C_Footer/>
      </div>
    )
  }
}

export default C_Home
