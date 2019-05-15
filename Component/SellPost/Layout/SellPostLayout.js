import React, { Component } from 'react'
import { ListPostCard, ListPostBottomCard, SellPostCard } from '../Cards'
import './style.css'
class SellPostLayout extends Component {
  state = {
    post: []
  }

  render() {
    console.log(this.state.post.length)
    return (
      <React.Fragment>
        <div className="section-sellpost">
          <ListPostCard />
          <ListPostBottomCard state={this.state} />
          <SellPostCard />
        </div>
        <SellPostCard />
      </React.Fragment>
    )
  }
}

export { SellPostLayout }
