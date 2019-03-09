import {
  GET_KNOWLEDGE_FOUND
} from './mutation-types'

export default {
  [GET_KNOWLEDGE_FOUND] (state, data) {
    state.knowledgeFound = data
  }
}