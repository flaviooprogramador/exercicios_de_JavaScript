import React from "react";
import Hacker from "./src/hacker";

const Index = () =>{
  return(
    <div class='p-3 mb-2 bg-dark text-white container text-center'>
      <p>Ola amigos!!!</p>
      <Hacker
      text="teste teste..."
      img_url="https://i.pinimg.com/originals/e6/dd/7d/e6dd7dcb605aa52e65754c899ffbb1a4.jpg"/>
    </div>
  )
}

export default Index;