import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import restaurant from '../../assets/images/restaurant.svg';
import church from '../../assets/images/church.svg';

const defaultMapStyles = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        weight: 2.0,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#9c9c9c',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 45 }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#7b7b7b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#46bcec' }, { visibility: 'on' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c8d7d4',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#070707',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
];

const MyMapComponent = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
      isFoodOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
        isFoodOpen: false,
      }),
      onToggleFoodOpen: ({ isFoodOpen }) => () => {
        return {
          isFoodOpen: !isFoodOpen,
          isOpen: false,
        };
      },
    },
  ),
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDoh0tgl70b9V4Kd-vgjqhOMHLOorS4p48&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 45.6528999, lng: 9.9427065 }}
      defaultOptions={{ styles: defaultMapStyles }}
    >
      <Marker
        onClick={props.onToggleOpen}
        position={{ lat: 45.6928999, lng: 9.8427065 }}
        options={{
          icon: {
            url: church,
            scaledSize: new google.maps.Size(31, 43),
          },
        }}
      >
        {props.isOpen && (
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div className="text-center p-4">
              <h4>Parrocchia Di S.Pietro Apostolo</h4>
              <p>Via Antonio Locatelli, 102, 24069 Trescore Balneario BG</p>
              <a
                className="btn btn-primary"
                href="https://www.google.it/maps/place/Parrocchia+Di+S.Pietro+Apostolo/@45.6932519,9.8426584,19z/data=!4m18!1m12!4m11!1m3!2m2!1d9.843349!2d45.6928632!1m6!1m2!1s0x47815c144087229f:0x1b018783ce9b151c!2sParrocchia+Di+S.Pietro+Apostolo,+Via+Antonio+Locatelli,+102,+24069+Trescore+Balneario+BG!2m2!1d9.8433457!2d45.6928701!3m4!1s0x47815c144087229f:0x1b018783ce9b151c!8m2!3d45.6928701!4d9.8433457"
                target="_blank"
              >
                Get Directions
              </a>
            </div>
          </InfoWindow>
        )}
      </Marker>
      <Marker
        onClick={props.onToggleFoodOpen}
        position={{ lat: 45.5994277, lng: 10.0562345 }}
        options={{
          icon: {
            url: restaurant,
            scaledSize: new google.maps.Size(31, 43),
          },
        }}
      >
        {props.isFoodOpen && (
          <InfoWindow onCloseClick={props.onToggleFoodOpen}>
            <div className="text-center p-4">
              <h4>Villa Fassati Barba</h4>
              <p>11, Via Castello, 25050 Passirano BS</p>
              <a
                className="btn btn-primary"
                href="https://www.google.it/maps/place/Villa+Fassati+Barba/@45.5994277,10.0562345,17z/data=!4m12!1m6!3m5!1s0x47816fec097705ad:0x818ec67a337b240a!2sVilla+Fassati+Barba!8m2!3d45.599424!4d10.0584285!3m4!1s0x47816fec097705ad:0x818ec67a337b240a!8m2!3d45.599424!4d10.0584285"
                target="_blank"
              >
                Get Directions
              </a>
            </div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
});

// Map with a Marker

export default function Hero() {
  return <MyMapComponent isMarkerShown />;
}
