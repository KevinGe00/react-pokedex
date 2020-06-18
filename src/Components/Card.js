import React, { Component } from 'react';
import "../App.css";


function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
              <h5 class="card-title">{capitalize(this.props.name)}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
  

export default Card;