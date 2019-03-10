import {
  GET_KNOWLEDGE_FOUND,
  GET_CATEGORY_LIST
} from './mutation-types'

export default {
  [GET_KNOWLEDGE_FOUND] (state, data) {
    state.knowledgeFound = data
  },

  [GET_CATEGORY_LIST] (state, data) {
    state.categoryList = data
  }
}