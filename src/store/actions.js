import ajax from '@/api/ajax'

import {
  GET_KNOWLEDGE_FOUND,
  GET_CATEGORY_LIST,
  GET_HOME_CART,
  GET_HOME
} from './mutation-types'

const BASE = '/api'

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
  },

  async reqCategoryList ({commit}) {
    const result = await ajax('/categoryList')
    commit(GET_CATEGORY_LIST, result.data)
  },

  async reqHomeCart ({commit},page=1) {
    const result = await ajax(`${BASE}/topic/v1/find/getTabData.json?page=${page}&size=5&tabId=6`)
    if (result.code === '200') {
      commit(GET_HOME_CART, result.data)
    }
  },
  async reqHome ({commit}) {
    const result = await ajax('/home')
    commit(GET_HOME, result.data)
  }
}