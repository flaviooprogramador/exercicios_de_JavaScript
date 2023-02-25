import React, { Fragment } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionLink from "../../shared/gray_img/WhitchLink/DescriptionWhitchLink";

const Planet = (props) => {
  return (
    <div class="p-3 mb-2 bg-dark text-white container text-center " onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <DescriptionLink Text={props.Text}
      Link={props.Link}/>
      <GrayImg img_url={props.img_url} />
    </div>
  );
};

export default Planet;
