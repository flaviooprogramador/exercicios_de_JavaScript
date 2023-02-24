import React from "react";
import Img from "./img";

const Hacker = (props) => {
  return (
    <div>
    <p> {props.text} </p>
    <Img img={props.img_url}/>
    </div>

  )
}

export default Hacker;