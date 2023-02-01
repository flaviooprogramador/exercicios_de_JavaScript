const Post = require("./post")

class author{
  constructor(name){
    this.name = name
    this.posts = []
  }

  writePost(title,body){
    const post = new Post(title,body, this)
    this.posts.push(post)
    return post
  }
}

module.exports = author