import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import EventList from '../components/EventList';
import {Map} from '../components/Map';
import {GoogleMap, Marker, SearchBox, withGoogleMap} from "react-google-maps";
import axios from 'axios';
import _ from 'lodash';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
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

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
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
    let venues = this.state.events.map(event => event._embedded.venues[0].location)
    this.setState({venueLocation: venues})
  }

  render() {
    let {navDrawerOpen} = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    console.log('USER LOCATION ', this.state.userLocation)

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

          <LeftDrawer navDrawerOpen={navDrawerOpen}
                      menus={Data.menus}
                      username="User Admin"/>

          <div style={styles.container}>

            {this.state.userLocation.lat != 0 && <Map containerElement={<div style={{height: `300px`}}/>}
                                                      mapElement={<div style={{height: `300px`}}/>}
                                                      venueLocation={this.state.venueLocation}
                                                      {...this.state.userLocation} />
            }

            <EventList events={this.state.events} />
            {/*{this.props.children}*/}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);


