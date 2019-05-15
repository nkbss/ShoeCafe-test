import React from 'react'
import { Card, Image, Icon } from '../../../node_modules/semantic-ui-react'

const RecommendShoeCard = props => {
  return (
    <Card raised>
      <Image
        src={props.src}
        // src="https://d3b962r9eea4ib.cloudfront.net/h239k2p6/8/193703/1c780fa0ab82598166ddcf2bf6d6ce315cc0605e17f8e6e488a1fc4e9210af97a/A "
        wrapped
        ui={false}
        id="recommend-card-image"
      />
      <Card.Content textAlign="center">
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.price}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export { RecommendShoeCard }
