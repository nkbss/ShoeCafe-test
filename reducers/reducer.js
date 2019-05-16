import { updateObject } from './updateObject'
import * as actionTypes from '../actions/action'
const initialState = {
  post: []
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.CREATEPOST:
      let post = state.post
      post.push({
        name: action.data.name,
        detail: action.data.detail,
        size: action.data.size,
        price: action.data.price
      })
      return {
        post: post
      }
    case actionTypes.EDITPOST:
      post = state.post
      if (action.data.name) {
        post[action.data.indexeditpost].name = action.data.name
      }
      if (action.data.detail) {
        post[action.data.indexeditpost].detail = action.data.detail
      }
      if (action.data.size) {
        post[action.data.indexeditpost].size = action.data.size
      }
      if (action.data.price) {
        post[action.data.indexeditpost].price = action.data.price
      }
      return {
        post: post
      }
    case actionTypes.DELETEPOST:
      post = state.post
      post[action.data.indexeditpost] = null
      post = post.filter(data => data !== null)
      return {
        post: post
      }
  }
  return state
}

export default reducer
