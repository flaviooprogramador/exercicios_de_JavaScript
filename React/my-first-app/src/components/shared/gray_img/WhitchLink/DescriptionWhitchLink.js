import React, { Fragment } from "react";

const DescriptionLink = (props) =>{
  return(
    <Fragment>
      <p>{props.Text}</p>
      <p><a href={props.Link}>{props.Link}</a></p>
      
    </Fragment>
  )
}

export default DescriptionLink;