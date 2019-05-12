import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import { Button, Carousel } from 'react-bootstrap'

class SlideShoeCard extends Component {
  render() {
    return (
      <div>
        <Carousel
          interval="3000"
          fade={true}
          keyboard={true}
          id="Carousel-detail"
        >
          <Carousel.Item id="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="https://i.redd.it/2y4zg1oz3qx01.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item id="corousel-item">
            <img
              className="d-block w-100 carousel-image2"
              src="https://www.sneakerhead.com/skin/frontend/default/sneakerhead2/images/blogs/blogbanner/home-blog-adidas-yeezy-350-butter-20180625.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item id="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="https://cdn.shopify.com/s/files/1/1210/9358/articles/adidas_YEEZY_V2_WB_Lateral_Right_PR300_4000x2976_1d346b5f-5890-4f2b-8f9b-068ba4c6cefb.jpg?v=1497977106"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export { SlideShoeCard }
