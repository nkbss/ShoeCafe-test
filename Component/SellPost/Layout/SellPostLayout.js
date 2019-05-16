import React, { Component } from 'react'
import {
  ListPostCard,
  ListPostBottomCard,
  SellPostModalCard,
  EditSellPostCard
} from '../Cards'
import './style.css'
import { UploadPictureCard } from '../Cards/UploadPictureCard'
import { connect } from 'react-redux'
import * as actionTypes from '../../../actions/action'

class SellPostLayout extends Component {
  state = {
    name: null,
    detail: null,
    size: null,
    price: null,
    picturepath: null,
    filespicture: null,
    postmodal: false,
    uploadpicture: false,
    indexeditpost: null,
    editpostmodal: false,
    warning: false
  }

  handleInput = (e, data) => {
    this.setState({ [data.name]: data.value })
  }

  openModalEdit = index => {
    this.setState({ editpostmodal: true, indexeditpost: index })
  }

  closeModalEdit = () => {
    this.setState({
      editpostmodal: false,
      indexeditpost: null,
      name: null,
      detail: null,
      size: null,
      price: null
    })
  }

  editPost = data => {
    this.props.editPost(data)
    this.closeModalEdit()
  }

  openModalCreatePost = () => {
    this.setState({
      postmodal: true,
      warning: false
    })
  }

  closeModalCreatePost = () => {
    this.setState({
      name: null,
      detail: null,
      size: null,
      price: null,
      picture: null,
      postmodal: false
    })
  }

  createPost = data => {
    if (
      data.name != '' &&
      data.detail != '' &&
      data.size != '' &&
      data.price != '' &&
      (data.name && data.detail && data.size && data.price)
    ) {
      this.props.createPost(data)
      this.closeModalCreatePost()
    } else {
      this.setState({ warning: true })
    }
  }

  handlePicture = event => {
    console.log(event.target.value)
    this.setState({
      filespicture: event.target.files[0],
      warningupload: false,
      picturepath: event.target.value
    })
  }

  handleUpload = () => {
    if (this.state.filespicture != null) {
      const upload = new FormData()
      upload.append(
        'upload',
        this.state.filespicture,
        this.state.filespicture.name
      )
    } else {
      this.setState({ warningupload: true })
    }
  }

  deletePost = data => {
    this.props.deletePost(data)
    this.closeModalEdit()
  }

  openModalUploadPicture = () => {
    this.setState({ uploadpicture: true })
  }

  closeModalUploadPicture = () => {
    this.setState({ uploadpicture: false })
  }

  render() {
    return (
      <React.Fragment>
        <div className="section-sellpost">
          <ListPostCard
            state={this.state}
            openModalEdit={this.openModalEdit}
            post={this.props.post}
          />
          <ListPostBottomCard
            post={this.props.post}
            openModalCreatePost={this.openModalCreatePost}
          />
          <SellPostModalCard
            state={this.state}
            handleInput={this.handleInput}
            openModalUploadPicture={this.openModalUploadPicture}
            closeModalCreatePost={this.closeModalCreatePost}
            createPost={this.createPost}
            createPostTest={this.props.createPostTest}
          />
          <UploadPictureCard
            state={this.state}
            closeModalUploadPicture={this.closeModalUploadPicture}
            handlePicture={this.handlePicture}
            handleUpload={this.handleUpload}
          />
          {this.props.post.length != 0 ? (
            <EditSellPostCard
              data={this.props.post[this.state.indexeditpost]}
              handleInput={this.handleInput}
              editPost={this.editPost}
              state={this.state}
              closeModalEdit={this.closeModalEdit}
              deletePost={this.deletePost}
            />
          ) : null}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: data => dispatch({ type: actionTypes.CREATEPOST, data: data }),
    editPost: data => dispatch({ type: actionTypes.EDITPOST, data: data }),
    deletePost: data => dispatch({ type: actionTypes.DELETEPOST, data: data })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellPostLayout)
