import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';

const aMap = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        className="map"
        // style={{height: '300px'}}
      >
        {/* compononent on the map at long-lat */}
        <aMap
          lat={59.955413}
          lng={30.337844}
          text={'Google Map'}
        />
      </GoogleMapReact>
    );
  }
}

Map.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
};

export default Map;
