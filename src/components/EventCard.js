import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';


class EventCard extends Component {
  constructor(props) {
    super(props)
  }

  getTwitterName() {
    let attractions = this.props.event._embedded.attractions;
    let twitter = attractions[0];
    if (Object.keys(twitter)) {
      twitter = twitter.externalLinks
    }
  }

  render() {
    let styles = {
      card: {
        marginTop: '15px',
        borderRadius: '6px',
        overflow: 'hidden',
        height: 'auto',
      },
      image: {
        height: '110%'
      }
    };

    let {name, images, _embedded, dates, id} = this.props.event;
    console.log('datessssss', dates)
    let fixedDate = new Date(dates.start.localDate).getDate()
    return (
      <div>
        <Card style={styles.card}>
          {/*<CardText>{name}</CardText>*/}
          <Link to={{pathname: '/events', query: {id: `${id}`}}}>
            <CardMedia
              overlay={<CardTitle title={name} subtitle={<div>{_embedded.venues[0].name} <p>{fixedDate}</p></div>}/>}>
              <img src={images[1].url} style={styles.image}/>
            </CardMedia>
          </Link>
        </Card>
      </div>
    );
  }
}

export default EventCard;
