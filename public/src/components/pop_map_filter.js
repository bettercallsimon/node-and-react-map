// pop_map_filter is a button/controller used to select which type of items are shown on the map
//  it floats over the map, at the top-left corner

import React, { Component} from 'react';
import axios from 'axios';

class MapFilter extends Component {
  constructor(props){
    super(props);

    this.state = {}

  }
  

  render() {
    return (
        <div className="pop_map_filter" onClick={console.log('map_filter_clicked')}>
            
        </div>
    );
  }
}



export default MapFilter;