import React, { Fragment } from "react";
import Planet from "./planet";
import DescriptionLink from "../shared/gray_img/WhitchLink/DescriptionWhitchLink";

async function getPlanets () {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data;
}

class Planets extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  removeLast = () => {
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

  render() {
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
          )
        }
      </Fragment>
    );
  }
}

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`)
}

export default Planets;
