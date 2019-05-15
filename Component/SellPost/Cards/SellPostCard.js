import React from 'react'
import { Card, Image } from '../../../node_modules/semantic-ui-react'
import { EditSellPostCard } from './EditSellPostCard'
var commaNumber = require('comma-number')

const SellPostCard = props => {
  return (
    <React.Fragment>
      <Card raised onClick={() => props.openModalEdit(props.index)}>
        <Image
          src="https://d3b962r9eea4ib.cloudfront.net/h239k2p6/8/193703/1c780fa0ab82598166ddcf2bf6d6ce315cc0605e17f8e6e488a1fc4e9210af97a/A "
          wrapped
          ui={false}
          id="recommend-card-image"
        />
        <Card.Content textAlign="center">
          <Card.Header>{props.data.name}</Card.Header>
          <Card.Meta>Size {props.data.size} US</Card.Meta>
          <Card.Description>$ {commaNumber(props.data.price)}</Card.Description>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}
export { SellPostCard }
