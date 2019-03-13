import Mock from 'mockjs'
import search from './search.json'
import knowledgeFound from './knowledgeFound.json'
import categoryList from './categoryList.json'
import home from './home.json'

Mock.mock('/search', {data: search})

Mock.mock('/knowledgeFound', {data: knowledgeFound})

Mock.mock('/categoryList', {data: categoryList})

Mock.mock('/home', {data: home})