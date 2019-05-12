import React, { Component } from 'react'
import { ShoeCafeCard, SlideShoeCard } from '../Card'
import './style.css'
class ShoeCafeLayout extends Component {
  render() {
    return (
      <div className="section-shoecafe">
        <SlideShoeCard />
        <ShoeCafeCard />
      </div>
    )
  }
}

export { ShoeCafeLayout }
