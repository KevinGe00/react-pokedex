import React, { Component } from 'react';
import "../App.css";

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
  

export default Card;