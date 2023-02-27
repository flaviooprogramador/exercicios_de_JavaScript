import React, { Fragment } from "react";
import Planet from "./planet";
import DescriptionLink from "../shared/gray_img/WhitchLink/DescriptionWhitchLink";

class Planets extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      planets: [
        {
        name:"Mercurio",
      Text:"Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
          
      img_url:"https://th.bing.com/th/id/R.70189d5584e58ca206824e275cb99fa4?rik=FnB%2fhrc0GRKGdw&riu=http%3a%2f%2fwww.mundoled.com.do%2fwp-content%2fuploads%2f2015%2f01%2fmercurio.jpg&ehk=nh2JEzj9AWjcoD7maQOFk6zSPFKZdFc7Bxno4%2bF8s7g%3d&risl=&pid=ImgRaw&r=0",
      Link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      
    },
     {
          name:"Plutão",
          Text:"Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
          img_url:"https://hypescience.com/wp-content/uploads/2015/07/plutao.jpg"
     }
      ]
    }
  }
  
  render(){
      return (
        <div>
        <h3>Planet List</h3>
        <button>show messsage!</button>
          <hr/>
          <Planet name={this.state.planets[0].name}
          Text={this.state.planets[0].Text}
          img_url={this.state.planets[0].img_url}
          clickOnPlanet={clickOnPlanet}
          title_whith_underline={true}
          gray={true}
          />
    
          <Planet
          name={this.state.planets[1].name}
          Text={this.state.planets[1].Text}
          img_url={this.state.planets[1].img_url}
          clickOnPlanet={clickOnPlanet}/>
    
          </div>
      );
    };
  }

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`)
}


export default Planets;
