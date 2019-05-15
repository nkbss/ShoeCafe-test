import React, { Component } from 'react'
import { Grid, Card } from '../../../node_modules/semantic-ui-react'
import { RecommendShoeCard } from './RecommendShoeCard'

class RecommendSectionCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid id="recommend-section">
          <Grid.Row textAlign="center">
            <Grid.Column textAlign="center">
              <label className="recommend-head">Recommended</label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card.Group itemsPerRow={4} id="recommend-cardgroup">
          {this.props.state.recommendShoe.map((data, index) => {
            return (
              <RecommendShoeCard
                key={index}
                name={data.name}
                src={data.src}
                price={data.price}
              />
            )
          })}
          {/* <RecommendShoeCard />
          <RecommendShoeCard />
          <RecommendShoeCard />
          <RecommendShoeCard />
          <RecommendShoeCard />
          <RecommendShoeCard /> */}
        </Card.Group>
      </React.Fragment>
    )
  }
}

export { RecommendSectionCard }
