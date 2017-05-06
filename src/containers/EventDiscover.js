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
      venueLocation: [],
      cityName: 'dublin'
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.fetchData();
    this.getUserLocation();
  }

  fetchData() {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.cityName}&apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ`)
      .then(response => {
        console.log(response.data._embedded.events)
        this.setState({events: response.data._embedded.events})
      })
      .catch(error => console.error(error))
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

  handleSearch(val) {
    console.log('olha o val', val)
    this.setState({cityName: val})
    this.fetchData()
  }

  render() {
    return (
      <div>
        {/*{this.state.userLocation.lat > 1 && <Map containerElement={<div style={{height: `300px`}}/>}*/}
        {/*mapElement={<div style={{height: `300px`}}/>}*/}
        {/*venueLocation={this.state.venueLocation}*/}
        {/*{...this.state.userLocation} />*/}
        {/*}*/}

        <Search handleSearch={this.handleSearch}/>

        <EventList events={this.state.events} cityName={this.state.cityName} />
      </div>
    );
  }
}

export default EventDiscover;
