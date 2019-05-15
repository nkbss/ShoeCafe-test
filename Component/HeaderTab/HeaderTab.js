import React, { Component } from 'react'
import { Menu, Input, Icon } from '../../node_modules/semantic-ui-react'
import './style.css'
class HeaderTab extends Component {
  render() {
    return (
      <Menu pointing secondary fluid size="huge" fixed="top" id="topmenu">
        <Menu.Menu id="topmenu-left">
          <Menu.Item id="topmenu-left-item">Shoe Cafe</Menu.Item>
        </Menu.Menu>

        <Menu.Menu id="topmenu-center">
          <Menu.Item id="topmenu-center-item">Home</Menu.Item>
          <Menu.Item id="topmenu-center-item">Shoes</Menu.Item>
          <Menu.Item id="topmenu-center-item">Sell</Menu.Item>
        </Menu.Menu>
        <Menu.Menu id="topmenu-right">
          <Menu.Item id="topmenu-search">
            <Input
              size="small"
              placeholder="Search"
              icon="search"
              iconPosition="left"
            />
          </Menu.Item>
          <Menu.Item id="topmenu-item">
            <Icon name="shopping cart" size="large" id="topmenu-icon" />
          </Menu.Item>
          <Menu.Item id="topmenu-item">
            <Icon name="heart outline" size="large" id="topmenu-icon" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
export { HeaderTab }
