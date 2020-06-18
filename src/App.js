import React, { Component } from "react";
import "./App.css";
import Card from './Components/Card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      pokemonNumber: 1,
      pokemonList: [],
    }
  }

  handleClick() {
    fetch("https://pokeapi.co/api/v2/pokemon-form/" + this.state.pokemonNumber)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
          pokePic: result.sprites.front_default,
          pokemonList: this.state.pokemonList.concat([{ name: result.name, image: result.sprites.front_default }]),
          pokemonNumber: this.state.pokemonNumber + 1,
        })
      });

  }

  
  render() {
    const pokemons = this.state.pokemonList;
    const pokemonCards = pokemons.map((pokemon) => {
      return (
        <Card pokePic={pokemon.image} name={pokemon.name} />
      );
    });

    return (
      <>
        <button onClick={() => this.handleClick()}>Click for next Pokemon</button>
        <div>{pokemonCards}</div>
      </>
    );
  }
}

export default App;