import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
 
    return (
      <div>      
  <div class="card">
          <img class="card-img-top" src={this.props.pokePic} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">{this.props.name}</h5>

          </div>
        </div>
   
        
    </div>
    );
  }
}

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

  handleClick(){
    fetch("https://pokeapi.co/api/v2/pokemon-form/"+ this.state.pokemonNumber)
      .then(res => res.json())
      .then((result) => {
        console.log(result.sprites.front_default);
        this.setState({
          isLoaded: true,
          items: result,
          pokePic: result.sprites.front_default,
          pokemonList: this.state.pokemonList.concat([{name:result.name, image: result.sprites.front_default}]),
          pokemonNumber: this.state.pokemonNumber+1,
        })

      });
  
}
  componentDidMount() {
    


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
     {/* {pokemonList} */}
      <div>{pokemonCards}</div>
      </>
    );
  }
}

export default App;