import React from 'react'
import {
  Grid,
  Modal,
  Input,
  TextArea,
  Form,
  Button,
  Dropdown
} from '../../../node_modules/semantic-ui-react'

const size = [
  { key: 5, text: '5', value: '5' },
  { key: 5.5, text: '5.5', value: '5.5' },
  { key: 6, text: '6', value: '6' },
  { key: 6.5, text: '6.5', value: '6.5' },
  { key: 7, text: '7', value: '7' },
  { key: 7.5, text: '7.5', value: '7.5' },
  { key: 8, text: '8', value: '8' },
  { key: 8.5, text: '8.5', value: '8.5' },
  { key: 9, text: '9', value: '9' },
  { key: 9.5, text: '9.5', value: '9.5' },
  { key: 10, text: '10', value: '10' },
  { key: 10.5, text: '10.5', value: '10.5' },
  { key: 11, text: '11', value: '11' },
  { key: 11.5, text: '11.5', value: '11.5' },
  { key: 12, text: '12', value: '12' }
]

const SellPostModalCard = props => {
  return (
    <React.Fragment>
      <Modal
        open={props.state.postmodal}
        centered={false}
        size="small"
        onClose={props.closeModalCreatePost}
        closeIcon
      >
        <Modal.Header id="sellpost-modal-header">
          Post
          {props.state.warning ? (
            <div className="sellpost-warning">
              <h3>Please enter your information!</h3>
            </div>
          ) : null}
        </Modal.Header>
        <Modal.Content>
          <Grid
            verticalAlign="middle"
            textAlign="center"
            className="sellpost-modal-grid"
          >
            <Grid.Row columns={2}>
              <Grid.Column>
                <label>Name</label>
              </Grid.Column>
              <Grid.Column>
                <Input
                  placeholder="Name"
                  name="name"
                  fluid
                  size="large"
                  onChange={props.handleInput}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <label>Detail</label>
              </Grid.Column>
              <Grid.Column>
                <Form size="large">
                  <TextArea
                    name="detail"
                    placeholder="Detail"
                    onChange={props.handleInput}
                  />
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={8}>
                <label>Size</label>
              </Grid.Column>
              <Grid.Column width={3}>
                <Dropdown
                  options={size}
                  selection
                  size="large"
                  name="size"
                  fluid
                  onChange={props.handleInput}
                />
              </Grid.Column>
              <Grid.Column width={5} textAlign="left">
                <label>US</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={8}>
                <label>Price</label>
              </Grid.Column>
              <Grid.Column width={3}>
                <Input
                  name="price"
                  placeholder="price"
                  fluid
                  type="number"
                  size="large"
                  onChange={props.handleInput}
                />
              </Grid.Column>
              <Grid.Column width={5} textAlign="left">
                <label>USD</label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <label>Picture</label>
              </Grid.Column>
              <Grid.Column>
                <Button
                  color="blue"
                  size="large"
                  onClick={() => props.openModalUploadPicture()}
                >
                  Upload
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Button
                  color="green"
                  size="large"
                  onClick={() => {
                    props.createPost(props.state)
                  }}
                >
                  Post
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  )
}

export { SellPostModalCard }
