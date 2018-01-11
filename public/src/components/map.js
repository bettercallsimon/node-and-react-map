import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';

//import components
import Building from './pop_building';
import Unit from './pop_unit';
import axios from 'axios';



class Map extends Component {
    constructor(props){
        super(props);

        this.state = {mapData : []};

    }

    render() {
        return (
            <GoogleMapReact
                //  MAP INIT.
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                className="map"
                //important to define the size, go figure why I can write anything in it and it work :/
                style={{height: ''}}
                >

                {/* ====== components on the map at long-lat  ====== */}

                {/* TODO: refactor the Building element into an ICON element that gets props that tells them the type */}
                {this.state.mapData ? this.state.mapData.map(( obj, index) => (
                    <Building lat={this.state.mapData[index].lat} lng={this.state.mapData[index].lng} />
                )): null}

                
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

//  set default values for the Map before we add any changes to it
Map.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 1
};



export default Map;
