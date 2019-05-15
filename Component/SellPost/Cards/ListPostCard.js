import React from 'react'
import { Grid, Card } from '../../../node_modules/semantic-ui-react'
import { SellPostCard } from './SellPostCard'

const ListPostCard = props => {
  return (
    <React.Fragment>
      <div className="sellpost-header">
        <h1>Sell Post</h1>
      </div>
      <Card.Group itemsPerRow={5} id="sellpost-cardgroup">
        {props.state.post.map((data, index) => {
          return (
            <SellPostCard
              key={index}
              index={index}
              data={data}
              openModalEdit={props.openModalEdit}
            />
          )
        })}
      </Card.Group>
    </React.Fragment>
  )
}

export { ListPostCard }
