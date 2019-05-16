import React from 'react'
import {
  Modal,
  Button,
  Input,
  Grid,
  Label,
  Dimmer,
  Loader
} from 'semantic-ui-react'

const UploadPictureCard = props => {
  return (
    <React.Fragment>
      <Modal size="tiny" open={props.state.uploadpicture}>
        <Modal.Header>Upload Picture</Modal.Header>
        <Modal.Content>
          <Grid textAlign="center">
            {props.warningupload ? (
              <Grid.Row style={{ paddingBottom: '0px' }}>
                <Label color="red">Please Choose File!</Label>
              </Grid.Row>
            ) : null}
            <Grid.Row>
              <Grid.Column>
                <Input
                  type="file"
                  name="Choose Files"
                  onChange={props.handlePicture}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="2">
              <Grid.Column width="4">
                <Button
                  color="green"
                  onClick={() => {
                    props.handleUpload()
                  }}
                >
                  Upload
                </Button>
              </Grid.Column>
              <Grid.Column width="4">
                <Button color="red" onClick={props.closeModalUploadPicture}>
                  Cancle
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
      <Modal open={props.upload}>
        <Loader size="large">Loading</Loader>
      </Modal>
    </React.Fragment>
  )
}
export { UploadPictureCard }
