import React, {Component} from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';


class EventCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = {
      card: {
        marginTop: '15px',
        borderRadius: '6px',
        overflow: 'hidden',
        height: '250px',
        margin: '0 10px'
      },
      image: {
        height: '110%'
      }
    };

    let {name, images, _embedded} = this.props.event;
    return (
      <div>
        <Card style={styles.card}>
          {/*<CardText>{name}</CardText>*/}
          <CardMedia overlay={<CardTitle title={name} subtitle={_embedded.venues[0].name}/>}>
            <img src={images[1].url} style={styles.image} />
          </CardMedia>
        </Card>
      </div>
    );
  }
}

export default EventCard;
