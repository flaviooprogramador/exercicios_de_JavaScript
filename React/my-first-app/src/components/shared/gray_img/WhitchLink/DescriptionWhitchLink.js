import React, { Fragment } from "react";

const DescriptionLink = (props) =>{
  if(!props.Text)
  return null;

  if(props.Link){
       return(
    <Fragment>
      <p>{props.Text}</p>
      <p><a href={props.Link}>{props.Link}</a></p>
      
    </Fragment>
  )
}else {
  return (
    <Fragment>
      <p><u>{props.Text}</u></p>
    </Fragment>
  )
}
  }
 
export default DescriptionLink;