import React, { Component } from 'react'
import {
  ShoeCafeCard,
  SlideShoeCard,
  RecommendShoeCard,
  RecommendSectionCard
} from '../Card'
import './style.css'
class ShoeCafeLayout extends Component {
  state = {
    recommendShoe: [
      {
        name: 'adidas Yeezy Boost 350 V2 Triple White',
        src:
          'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Cream-White/Images/Adidas-Yeezy-Boost-350-V2-Cream-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1539789713&w=2200',
        price: '$390+'
      },
      {
        name: 'adidas Yeezy Boost 350 V2 Blue Tint',
        src:
          'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Blue-Tint/Images/Adidas-Yeezy-Boost-350-V2-Blue-Tint/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=2200',
        price: '$405+'
      },
      {
        name: 'adidas Yeezy Boost 350 V2 Butter',
        src:
          'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Butter/Images/Adidas-Yeezy-Boost-350-V2-Butter/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=2200',
        price: '$274+'
      },
      {
        name: 'adidas Yeezy Boost 700 Wave Runner',
        src:
          'https://stockx-360.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=2200',
        price: '$890+'
      }
    ]
  }

  render() {
    return (
      <div className="section-shoecafe">
        <SlideShoeCard />
        <RecommendSectionCard state={this.state} />
      </div>
    )
  }
}

export { ShoeCafeLayout }
