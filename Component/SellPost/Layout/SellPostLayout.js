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
    post: [],
    name: null,
    detail: null,
    size: null,
    price: null,
    picturepath: null,
    filespicture: null,
    postmodal: false,
    uploadpicture: false,
    indexeditpost: null,
    editpostmodal: false
  }

  handleInput = (e, data) => {
    this.setState({ [data.name]: data.value })
  }

  openModalEdit = index => {
    console.log('clicked')
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
    // console.log(index)
    // if (this.state.name) {
    //   this.state.post[index].name = this.state.name
    // }
    // if (this.state.detail) {
    //   this.state.post[index].detail = this.state.detail
    // }
    // if (this.state.size) {
    //   this.state.post[index].size = this.state.size
    // }
    // if (this.state.price) {
    //   this.state.post[index].price = this.state.price
    // }
    this.props.editPost(data)
    this.closeModalEdit()
  }

  openModalCreatePost = () => {
    this.setState({
      postmodal: true
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
    this.props.createPost(data)
    this.closeModalCreatePost()
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

      console.log(upload)
    } else {
      this.setState({ warningupload: true })
    }
  }

  deletePost = index => {
    this.state.post[index] = null
    this.state.post = this.state.post.filter(data => data !== null)
    this.closeModalEdit()
  }

  openModalUploadPicture = () => {
    this.setState({ uploadpicture: true })
  }

  closeModalUploadPicture = () => {
    this.setState({ uploadpicture: false })
  }

  render() {
    console.log(this.props.post)
    console.log(this.state.editpostmodal)
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
    editPost: data => dispatch({ type: actionTypes.EDITPOST, data: data })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellPostLayout)
