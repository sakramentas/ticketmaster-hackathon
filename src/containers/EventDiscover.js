import React, {Component} from 'react';
import axios from 'axios';
import Search from '../components/Search'
// import {GoogleMap, Marker, SearchBox, withGoogleMap} from "react-google-maps";

import EventList from '../components/EventList';
import Map from '../components/Map';

class EventDiscover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      userLocation: {
        lat: 0,
        lng: 0
      },
      venueLocation: []
    };
  }

  componentWillMount() {
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ')
      .then(response => {
        console.log(response.data._embedded.events)
        this.setState({events: response.data._embedded.events})
      })
      .catch(error => console.error(error))

    this.getUserLocation();
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('position', position)
      this.setState({
        userLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      this.getVenueLocation()
    });
  }

  getVenueLocation() {
    // let venueLoc = _.map(this.state.events._embedded.venues[0].location, 'id');
    console.log('venussss2', this.state.events)
    // let venues = this.state.events.map(event => event._embedded.venues[0].location)
    // console.log('venussss', venues)
    // this.setState({venueLocation: venues})
  }

  render() {
    return (
      <div>
        {/*{this.state.userLocation.lat > 1 && <Map containerElement={<div style={{height: `300px`}}/>}*/}
                                                  {/*mapElement={<div style={{height: `300px`}}/>}*/}
                                                  {/*venueLocation={this.state.venueLocation}*/}
                                                  {/*{...this.state.userLocation} />*/}
        {/*}*/}

        <Search />

        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default EventDiscover;
