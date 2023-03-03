import React, { Fragment } from "react";
import Planet from "./planet";
import DescriptionLink from "../shared/gray_img/WhitchLink/DescriptionWhitchLink";




const Planets = () => {
  constructor(props)
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


  removeLast = () =>{
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState(state => ({
      planets: new_planets
    }))
  }

  duplicarLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1]
    this.setState(state => ({
      planets: [...this.state.planets, last_planet]
    }))
  }
  
  render()
      return (
        <Fragment>
        
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <hr></hr>
        <button onClick={this.duplicarLastPlanet}>duplicarLastPlanet</button>
          <hr/>
          {
            this.state.planets.map((planet) =>
          <Planet 
            name={planet.name}
            Text={planet.Text}
            img_url={planet.img_url}
            
            />
    ) }
    </Fragment>
  
      );
    };
  

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`)
}
export default Planets;