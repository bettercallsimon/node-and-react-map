import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';

//import components
import MapIcon from './pop_map_icon';
import axios from 'axios';

import Building from './pop_building';



class Map extends Component {
    constructor(props){
        super(props);

        // set original states for the component
        this.state = {mapData : [], centerPosition : {lat: 30.95, lng: 5.33}, zoom : 2 };

    }
    beenClick = () => {
        console.log('component has been clicked');
    }

    placeIcon = () => {
        
        //  check if mapData has something to draw...
        if(this.state.mapData.length > 0) {
            
        //  ...loop into it, send props to get back the correct component
        return (
            this.state.mapData.map(( obj, index) => ( 
                    <MapIcon 
                        type={obj.type} 
                        lat={obj.lat} 
                        lng={obj.lng}

                        //add a click function 
                    />
                )
            )
        )
        
        //  ...return null if not (it usually happen once every load until fetch result come back)
        } else {
            return null;
        }

    }

    render() {
        
        return (
            <GoogleMapReact
                //  MAP INIT.
                defaultCenter={this.state.centerPosition}
                defaultZoom={this.state.zoom}
                className="map"
                
            >

            {/* ====== components on the map at long-lat  ====== */}

            {this.placeIcon()}

            
            {/* ==/== END OF MAP's LIST OF COMPONENTS ==/== */}
            </GoogleMapReact>
        );
    }
    componentDidMount() {
        // once the component is fully loaded, we call the API for the map data
		axios.get('/api/')
		.then( (response) => {
            
            // we change the app state, with the new data, which makes a re-render
            this.setState({mapData: response.data});

		})
		.catch(function (error) {
		    console.log(error);
		});
	}
}

export default Map;
