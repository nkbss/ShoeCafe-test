import React, { Component } from 'react'
import { ShoeCafeLayout } from '../Component/ShoeCafe/Layout'
import { HeaderTab } from '../Component/HeaderTab'

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTab />
        <ShoeCafeLayout />
      </React.Fragment>
    )
  }
}

export default index
