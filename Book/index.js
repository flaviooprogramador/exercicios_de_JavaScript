const author = require("./Author");

const john = new author('jhon Doe')


const post = john.writePost("Titulo do post", "Lorem ipsum, dolor sic...")

post.addcomment("isaac Pontes", "Muito bom!")
post.addcomment("Franklin castle", "Legal esse post!")


console.log(john)
console.log(post)