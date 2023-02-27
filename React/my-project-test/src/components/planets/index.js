import React, { Fragment } from "react";
import Planet from "./planet";
import DescriptionLink from "../shared/gray_img/WhitchLink/DescriptionWhitchLink";

class Planets extends React.Component{
  render(){
      return (
        <div>
        <h3>Planet List</h3>
        <button>show messsage!</button>
          <hr/>
          <Planet name="Mercurio"
          
          
          img_url="https://th.bing.com/th/id/R.70189d5584e58ca206824e275cb99fa4?rik=FnB%2fhrc0GRKGdw&riu=http%3a%2f%2fwww.mundoled.com.do%2fwp-content%2fuploads%2f2015%2f01%2fmercurio.jpg&ehk=nh2JEzj9AWjcoD7maQOFk6zSPFKZdFc7Bxno4%2bF8s7g%3d&risl=&pid=ImgRaw&r=0"
          Link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
          clickOnPlanet={clickOnPlanet}
          title_whith_underline={true}
          gray={true}
          />
    
          <Planet
          name="Plutão"
          Text="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.
    
          Como outros membros do cinturão de Kuiper, Plutão é composto primariamente de rocha e gelo e é relativamente pequeno, com aproximadamente um quinto da massa da Lua e um terço de seu volume. Ele tem uma órbita altamente inclinada e excêntrica que o leva de 30 a 49 UA do Sol. Isso faz Plutão ficar periodicamente mais perto do Sol do que Netuno (Neptuno). Atualmente Plutão está a 32,9 UA do Sol.[8]
          
          Plutão foi descoberto em 1930 por Clyde Tombaugh e até 2006 foi considerado o nono planeta do Sistema Solar. A partir de 1992, com a descoberta de vários outros objetos similares a ele no Sistema Solar externo, sua classificação como um planeta começou a ser questionada, especialmente após a d"
          img_url="https://hypescience.com/wp-content/uploads/2015/07/plutao.jpg"
          
          clickOnPlanet={clickOnPlanet}/>
    
          </div>
      );
    };
  }

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`)
}


export default Planets;
