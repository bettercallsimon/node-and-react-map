// Building pop menu, this component has access to lat and lng coordinates from this.props.lat / lng

import React, { Component} from 'react';
import axios from 'axios';

class Building extends Component {
  constructor(props){
    super(props);

    this.state = {toggleMenu: 'closed'}

  }
  

  render() {
    return (
        <div className="pop_building" onClick={this.setState.toggleMenu}>
            <p>lat: {this.props.lat}</p>
            <p>lng: {this.props.lng}</p>
        </div>
    );
  }
}



export default Building;