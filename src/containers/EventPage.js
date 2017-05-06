import React, {Component} from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import { Timeline } from 'react-twitter-widgets'
import axios from 'axios'

class EventPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.cityName}&apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ`)
      .then(response => {
        console.log(response.data._embedded.events)
        this.setState({events: response.data._embedded.events})
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div style={{color: '#FFF'}}>
       EVENT PAGE
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'twitterdev'
          }}
          options={{
            username: 'TwitterDev',
            height: '400'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    );
  }
}

export default EventPage;
