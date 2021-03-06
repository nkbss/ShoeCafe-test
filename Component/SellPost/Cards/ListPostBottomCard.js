import React from 'react'
import { Button } from '../../../node_modules/semantic-ui-react'

const ListPostBottomCard = props => {
  return (
    <React.Fragment>
      {props.post.length === 0 ? (
        <div className="sellpost-bottom-nopost">
          <h2>-----------------No post-----------------</h2>
        </div>
      ) : null}
      <div className="sellpost-bottom-button">
        <Button
          color="teal"
          size="large"
          onClick={() => props.openModalCreatePost()}
        >
          Create Post
        </Button>
      </div>
    </React.Fragment>
  )
}
export { ListPostBottomCard }
