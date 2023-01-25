class User{
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password){

    if(this.email === email && this.password === password){
      console.log('Login realizado com sucesso')  
    }
    else if(email !== this.email && password !== this.password ){
      console.log('erro senha e email INVALIDOS')
    }
    else if(email !== this.email){
      console.log('ERRO email invalido')
    }
    else{
      console.log('ERRO senha invalido')
    }

}
}



const john = new User('Jhon Doe', 'John@email.com', '1234')
console.log(john)
john.login('John@email.co', '124')
