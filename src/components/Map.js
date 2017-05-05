import React from 'react'
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import fancyMapStyles from '../constants/fancyMapStyles.json'

export const Map = withGoogleMap(props => {

  var places = ['Dublin', 'Swords', 'Howth']

  // For each place, get the icon, name and location.
  // var bounds = new google.maps.LatLngBounds();
  // places.forEach(function(place) {
  //   if (!place.geometry) {
  //     console.log("Returned place contains no geometry");
  //     return;
  //   }
  //   var icon = {
  //     url: place.icon,
  //     size: new google.maps.Size(71, 71),
  //     origin: new google.maps.Point(0, 0),
  //     anchor: new google.maps.Point(17, 34),
  //     scaledSize: new google.maps.Size(25, 25)
  //   };
  //
  //   // Create a marker for each place.
  //   markers.push(new google.maps.Marker({
  //     map: map,
  //     icon: icon,
  //     title: place.name,
  //     position: place.geometry.location
  //   }));
  //
  //   if (place.geometry.viewport) {
  //     // Only geocodes have viewport.
  //     bounds.union(place.geometry.viewport);
  //   } else {
  //     bounds.extend(place.geometry.location);
  //   }
  // });


  return (
    <div>
      {props.venueLocation.length &&
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: parseFloat(props.venueLocation[0].latitude), lng: parseFloat(props.venueLocation[0].longitude)}}
        defaultOptions={{styles: fancyMapStyles}}>


        {props.venueLocation.map((venue, index) => {
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





