import React, { Component} from 'react';
import axios from 'axios';

function clickBuilding() {
    alert();
    
    axios.get('/api2/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

class Building extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
        <div className="pop_building" onClick={clickBuilding}></div>
    );
  }
}



export default Building;