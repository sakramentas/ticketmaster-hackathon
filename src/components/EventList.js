import React, {Component} from 'react';
import Slider from 'react-slick';
import EventCard from '../components/EventCard';

class EventList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = {
      marginTop: '30px'
    };

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      centerPadding: 7,
      afterChange: () => console.log('test')
    };

    return (
      <div style={styles}>
        {(this.props.events.length > 0) &&
        <div>
          {this.props.events.map((event, index) => {
            return (
              <div key={index}>
                <EventCard event={event}
                />
              </div>
            )
          })}
        </div>
        }
      </div>
    );
  }
}

export default EventList;
