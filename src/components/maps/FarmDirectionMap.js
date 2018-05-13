/*global google*/
import React, { Component } from 'react';
import '../../assets/css/map.css';

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} = require("react-google-maps");
// const demoFancyMapStyles = require("../../assets/styles/demoFancyMapStyles.json");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100vh` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(41.034899, -72.504491),
        destination: new google.maps.LatLng(40.669756, -73.669770),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
    <GoogleMap
        defaultZoom={7}
    >
    {props.directions && <DirectionsRenderer 
        directions={props.directions}
        options={{
            suppressMarkers: true,
            polylineOptions: { 
              strokeColor: 'red',
              strokeWeight : '8'
            }
        }}
    />}
    {/* <Marker position={{ lat: 41.034899, lng: -72.504491 }} /> */}
    <Marker position={{ lat: 40.669756, lng: -73.669770 }} />
  </GoogleMap>
);

class FarmDirectionMap extends Component {
    render() {
        return (
            <div className="google-map-container">
                <MapWithADirectionsRenderer />
            </div>
        )
    }
}

export default FarmDirectionMap;