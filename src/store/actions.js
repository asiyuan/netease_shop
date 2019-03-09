import ajax from '@/api/ajax'

import {
  GET_KNOWLEDGE_FOUND
} from './mutation-types'

export default {
  async reqKnowledgeFound ({commit}) {
    const result = await ajax('/knowledgeFound')
    if (result.data.code === '200') {
      const data = result.data.data
      let arr = []
      const res = data.map((item, index) => {
        item.topics.forEach(i => {
          arr.push(i)
        })
        return arr
      })
      commit(GET_KNOWLEDGE_FOUND, arr)
    }
  }
}