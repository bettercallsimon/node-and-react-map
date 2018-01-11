import React, { Component} from 'react';

// import all component
import Building from './pop_building';
import Unit from './pop_unit';

//  the function act as a icon selector, based on the props.type prop we attribute in
//  map.js after axios has fetched the data to render on the API

function MapIcon(props) {
    
    const iconType = props.type;
    
    //  support Building
    if (iconType === 'building') { 
      return <Building />;
    } 

    //  support Building
    else if (iconType === 'unit') {  
        return <Unit />;
    }
    
    //handles errors if type is not listed, should upgrade to better error msg instead of just doing nothing
    return null;
}

export default MapIcon;