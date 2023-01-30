function validateEmail(email){
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
    const err = new Error()
  }
}
