import Mock from 'mockjs'
import search from './search.json'

Mock.mock('/search', {data: search})