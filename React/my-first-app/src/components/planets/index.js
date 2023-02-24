import React, { Fragment } from "react";
import Planet from './planet'

const Planets = () => {
  return (
    <Fragment>
        <h3>Planet List</h3>
        <hr/>
        <Planet name="Mercúrio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        img_url="https://th.bing.com/th/id/R.4a49514d540e3449de477683a50eac86?rik=oja0R%2fZwU1ZW5g&pid=ImgRaw&r=0"/>

        <Planet
        name="Plutão"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        img_url="https://th.bing.com/th/id/OIP.4SUDOcJEQggmhDR_G_QBGAHaHa?pid=ImgDet&rs=1"/>


    </Fragment>
  
  );
}

export default Planets;