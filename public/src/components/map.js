import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';

//import components
import MapIcon from './pop_map_icon';
import axios from 'axios';

import Building from './pop_building';

const mapTheme = require("./helpers/mapTheme.json");

/**
 *   Straight from the docs of google-map-react, this is how they put options in the map
 *   I still dont know where the 'maps' argument get send to this 
 *   function since its called without it in render
 *   this is copy paste code and I'm not proud of it
 */
function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.ZoomControlStyle.DEFAULT
      },
      // apply my own color theme, edited via /helpers/mapTheme.json 
      // map straight out of https://snazzymaps.com parsed as JSON
      styles: mapTheme, 
      backgroundColor: "#021019",
      mapTypeControl: false,
      fullscreenControl: false
      
    };
  }



class Map extends Component {
    constructor(props){
        super(props);

        // set original states for the component
        this.state = {
            mapData : [], 
            centerPosition : {lat: 30.95, lng: 5.33},
            zoom : 2
        };

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

    onChildClick = () => {
        console.log('child clicked!');
    }

    render() {
        
        return (
            <GoogleMapReact
                //  MAP INIT.
                center={this.state.centerPosition}
                zoom={this.state.zoom}
                //setup map theme
                options={createMapOptions}
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

        console.log("mapStyle", this.state.mapStyle);
	}
}



export default Map;
