import React, { Component} from 'react';

// import all component
import Building from './pop_building';
import Unit from './pop_unit';

class mapIcon extends Component {
  constructor(props){
    super(props);
    this.iconSelector = this.iconSelector.bind(this);

    this.state = {toggleMenu: 'closed'}


  }


  render() {
    return (
        this.iconSelector()
    );
  }
}

  //  the method act as a icon selector, based on the props.type prop we attribute in
mapIcon.iconSelector = () => {
    
    const iconType = this.props.type;
    
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

export default Building;