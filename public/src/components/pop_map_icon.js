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
    
        // should refactor this to also check if the component is open or closed and render the correct
        // component (so either an icon or a full open mini-window)
        const iconType = this.props.type;
        
         // support Building
        if (iconType === 'building') { 
        
            return (
                //passing lat and lng to the Building component
                <Building lat={this.props.lat} lng={this.props.lng} />
            );
        } 

        //  support Unit
        else if (iconType === 'unit') {  
            //passing lat and lng to the Unit component
            return <Unit lat={this.props.lat} lng={this.props.lng}  />
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