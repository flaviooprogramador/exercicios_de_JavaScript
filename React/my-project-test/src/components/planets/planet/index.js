import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionLink from "../../shared/gray_img/WhitchLink/DescriptionWhitchLink";

  const Planet = (props) => {
  const names =  ['a','b', 'c' , 'd']
  
  let title;
  if(props.title_whith_underline)
  title = <h4> <u>{props.name}</u></h4>
  else
  title = <h4> {props.name}</h4>

  return (
    <div class="p-3 mb-2 bg-dark text-white container text-center " onClick={() => props.clickOnPlanet(props.name)}>
      {title}
      <DescriptionLink Text={props.Text}
      Link={props.Link}/>
      <GrayImg img_url={props.img_url} gray={props.gray} />

      <h4> satelites </h4>
      <ul> 
        { 
           names.map((n) => 
          <li> satelites {n} </li>
          ) }
      </ul>
      <hr/>
    </div>
  );
};

export default Planet;
