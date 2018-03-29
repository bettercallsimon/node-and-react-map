import React, { Component} from 'react';

// import all component
import Building from './pop_building';
import Unit from './pop_unit';

class MapIcon extends Component {
    constructor(props){
        super(props);
        //this.iconSelector = this.iconSelector.bind(this);

        this.state = {status: 'not-useful'}


    }
    iconSelector = () => {
    
        console.log(this.props.isHome);

        // should refactor this to also check if the component is open or closed and render the correct
        // component (so either an icon or a full open mini-window)
        const isHome = this.props.isHome;
        
         // if no extra data has been found on the object, draw the blue triangle with info-bubble
        if (isHome === 'cienapps') { 
        
            return (
                //passing lat and lng to the Building component
                <Unit lat={this.props.lat} lng={this.props.lng} name={this.props.name} isOpen={this.props.isOpen} vicinity={this.props.vicinity}/>
            );
        } 

        //  if the object carry extra data, draw the red triangle and pass the info to the component
        else {  
            //passing props from map to the unit component
            return <Building lat={this.props.lat} lng={this.props.lng} name={this.props.name} isOpen={this.props.isOpen} vicinity={this.props.vicinity}/>
        }

        //handles errors if type is not listed, should upgrade to better error msg instead of just doing nothing
        return null;
    }

    render() {
        return (
            this.iconSelector()
        );
    }
}



export default MapIcon;