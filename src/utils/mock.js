const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://localhost:8080' // 定义默认域名，随便写
const code = 200 // 返回的状态码

// 随机生成搜索结果
const newBookData = req => {
  let recommend = [] // 用于存放文章数据的数组
  
  for (let i = 0; i < 8; i++) {
    let tagNum = Random.natural(2,5)
    let tags = []
    for (let j = 0; j < tagNum; j++) {
      tags.push(Random.string(2,4))
    }
    let newBook = {
      bid: Random.id(),
      url: Random.url(),
      tags,
      name: Random.ctitle(), 
      author: Random.cname(), 
      score: Random.float(0,10,1,1), 
      issue: Random.region(),
      issue_time: Random.date()
    }

    recommend.push(newBook)
  }
  
  // 返回状态码和文章数据recommend
  return {
    code,
    recommend
  }
}

const tokenData = req => {
  return {
    token: Random.string(10)
  }
}

const bookData = req => {
  let tagNum = Random.natural(2,5)
  let tags = []
  for (let j = 0; j < tagNum; j++) {
    tags.push(Random.string(2,4))
  }
  let bookInfo = {
    bid: Random.id(),
    url: Random.url(),
    tags,
    name: Random.ctitle(), 
    author: Random.cname(), 
    score: Random.float(0,10,1,1), 
    issue: Random.region(),
    issue_time: Random.date()
  }

  let recommend = [] // 用于存放文章数据的数组
  
  for (let i = 0; i < 8; i++) {
    let newBook = {
      bid: Random.id(),
      url: Random.url(),
      tags,
      name: Random.ctitle(), 
      author: Random.cname(), 
      score: Random.float(0,10,1,1), 
      issue: Random.region(),
      issue_time: Random.date()
    }
    recommend.push(newBook)
  }
  
  return {
    bookInfo,
    recommend
  }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/search`, 'post', newBookData);
Mock.mock(`${domain}/login`, 'post', tokenData);
Mock.mock(`${domain}/getOneBook`, 'post', bookData);