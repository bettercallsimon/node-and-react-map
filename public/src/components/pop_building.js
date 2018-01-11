import React, { Component} from 'react';
import axios from 'axios';

class Building extends Component {
  constructor(props){
    super(props);

    this.state = {toggleMenu: 'closed'}

  }
  

  render() {
    return (
        <div className="pop_building" onClick={this.setState.toggleMenu}></div>
    );
  }
}



export default Building;