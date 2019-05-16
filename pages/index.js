import React, { Component } from 'react'
import { ShoeCafeLayout } from '../Component/ShoeCafe/Layout'
import { HeaderTab } from '../Component/HeaderTab'
import SellPostLayout from '../Component/SellPost/Layout/SellPostLayout'

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderTab />
        <SellPostLayout />
      </React.Fragment>
    )
  }
}

export default index
