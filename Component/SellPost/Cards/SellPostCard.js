import React from 'react'
import {
  Grid,
  Modal,
  Input,
  TextArea,
  Form,
  Button
} from '../../../node_modules/semantic-ui-react'

const SellPostCard = () => {
  return (
    <React.Fragment>
      <Modal open={true} centered={false} size="small">
        <Modal.Header>Post</Modal.Header>
        <Modal.Content>
          <Grid verticalAlign="middle" textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column>Name</Grid.Column>
              <Grid.Column>
                <Input placeholder="Name" name="name" fluid size="large" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>Description</Grid.Column>
              <Grid.Column>
                <Form size="large">
                  <TextArea name="description" placeholder="Description" />
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={8}>Size</Grid.Column>
              <Grid.Column width={3}>
                <Input name="size" fluid size="large" />
              </Grid.Column>
              <Grid.Column width={5} textAlign="left">
                Us
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={8}>Price</Grid.Column>
              <Grid.Column width={3}>
                <Input name="price" placeholder="price" fluid size="large" />
              </Grid.Column>
              <Grid.Column width={5} textAlign="left">
                Baht
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>Picture</Grid.Column>
              <Grid.Column>
                <Button color="blue" size="large">
                  Upload
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Button color="green" size="large">
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

export { SellPostCard }
