import Mock from 'mockjs'
import search from './search.json'
import knowledgeFound from './knowledgeFound.json'

Mock.mock('/search', {data: search})

Mock.mock('/knowledgeFound', {data: knowledgeFound})