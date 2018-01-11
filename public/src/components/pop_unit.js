import React, { Component} from 'react';
import axios from 'axios';

function clickBuilding() {
    alert();
    
    axios.get('/api/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

class Unit extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
        <div className="pop_unit" onClick={clickBuilding}></div>
    );
  }
}

export default Unit;