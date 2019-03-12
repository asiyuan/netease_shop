import {
  GET_KNOWLEDGE_FOUND,
  GET_CATEGORY_LIST,
  GET_HOME_CART
} from './mutation-types'

export default {
  [GET_KNOWLEDGE_FOUND] (state, data) {
    state.knowledgeFound = data
  },

  [GET_CATEGORY_LIST] (state, data) {
    state.categoryList = data
  },
  [GET_HOME_CART] (state, data) {
    // data.result.forEach(item => state.homeCart.push(item))
    state.homeCart = [...state.homeCart, ...data.result]
  }
}