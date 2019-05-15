import React, { Component } from 'react'
import {
  ListPostCard,
  ListPostBottomCard,
  SellPostModalCard,
  EditSellPostCard
} from '../Cards'
import './style.css'
import { UploadPictureCard } from '../Cards/UploadPictureCard'
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

  editPost = index => {
    console.log(index)
    if (this.state.name) {
      this.state.post[index].name = this.state.name
    }
    if (this.state.detail) {
      this.state.post[index].detail = this.state.detail
    }
    if (this.state.size) {
      this.state.post[index].size = this.state.size
    }
    if (this.state.price) {
      this.state.post[index].price = this.state.price
    }
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

  createPost = () => {
    this.state.post.push({
      name: this.state.name,
      detail: this.state.detail,
      size: this.state.size,
      price: this.state.price,
      picture: this.state.picture
    })
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
      //   axios.post(API_SERVICE + 'upload', upload).then(res => {
      //     this.setState({
      //       status: res.data.success,
      //       pathphoto: res.data.path,
      //       uploadphoto: false,
      //       upload: false
      //     })
      //   })
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
    console.log(this.state)
    return (
      <React.Fragment>
        <div className="section-sellpost">
          <ListPostCard state={this.state} openModalEdit={this.openModalEdit} />
          <ListPostBottomCard
            state={this.state}
            openModalCreatePost={this.openModalCreatePost}
          />
          <SellPostModalCard
            state={this.state}
            handleInput={this.handleInput}
            openModalUploadPicture={this.openModalUploadPicture}
            closeModalCreatePost={this.closeModalCreatePost}
            createPost={this.createPost}
          />
          <UploadPictureCard
            state={this.state}
            closeModalUploadPicture={this.closeModalUploadPicture}
            handlePicture={this.handlePicture}
            handleUpload={this.handleUpload}
          />
          {this.state.post.length != 0 ? (
            <EditSellPostCard
              data={this.state.post[this.state.indexeditpost]}
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

export { SellPostLayout }
