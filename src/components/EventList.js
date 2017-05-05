import React, {Component} from 'react';
import Slider from 'react-slick';
import EventCard from '../components/EventCard';

class EventList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = {
      marginTop: '15px',
      borderRadius: '6px',
      overflow: 'hidden'
    };

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      centerPadding: 7,
    };

    return (
      <div>
        {(this.props.events.length > 0) &&
        <Slider {...settings}>
          {this.props.events.map((event, index) => {
            return (
              <div key={index}>
                <EventCard event={event}
                           />
              </div>
            )
          })}
        </Slider>
        }
      </div>
    );
  }
}

export default EventList;
