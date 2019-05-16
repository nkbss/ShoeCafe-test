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
  }
  return state
}

export default reducer
