const comment = require("./comment")

class Post{
  constructor(title,body, author){
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAt = new Date()
  }

  addcomment(username, content){
    this.comments.push(new comment(username,content))
  
  }
}

module.exports = Post
