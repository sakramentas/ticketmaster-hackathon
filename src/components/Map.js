import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import fancyMapStyles from '../constants/fancyMapStyles.json'

import React, { Component } from 'react';

class Map extends Component {

  constructor(props) {
    super(props)
    console.log('this props ', this.props)
    this.state = {
      lat: this.props.venueLocation[0].latitude,
      lng: this.props.venueLocation[0].longitude
    }
  }

  MapView() {
    console.log('loading map view')
    return withGoogleMap(() => {
      return (
        <div>
          {this.props.venueLocation.length &&
          <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng)}}
            defaultOptions={{styles: fancyMapStyles}}>


            {this.props.venueLocation.map((venue, index) => {
              {/*console.log('venue', typeof venue.latitude, venue.longitude, index)*/
              }
              if (venue) {
                return (
                  <Marker
                    position={{lat: parseFloat(venue.latitude), lng: parseFloat(venue.longitude)}}
                    key={index}
                  />
                )
              }
            })}

          </GoogleMap>
          }
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        mapaa
        {this.MapView()}
      </div>
    );
  }
}

export default Map







