import React from 'react';

// local modules
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MediaQuery from 'react-responsive';
// import {ClubTeaser} from './../club-teaser-list/club-teaser-list';
import MapPopup from './../map-popup/map-popup';

// styles
import './map.scss';
class ClubMap extends React.Component {
  render() {
    const position = [38.3345123, -99.5218668];
    // const mobilePosition = []
    const nevada = [38.0582213, -115.6058512];
    const phoenix = [42.5, -107.6];
    const dallas = [37.8155573, -108.4803483];

    const clubs = this.props.clubs || [];

    const mockLocations = [
      { location: nevada, title: 'Club of nevada' },
      { location: phoenix, title: 'Club of phoenix' },
      { location: dallas, title: 'Club of Dallas' }
    ];

    const markers = clubs.map((club, i) => {
      return (
        <Marker position={mockLocations[i].location} key={i}>
          <Popup>
            {' '}
            <MapPopup club={club} />{' '}
          </Popup>
        </Marker>
      );
    });

    return (
      <>
        <MediaQuery maxWidth={767}>
          <div
            style={{
              height: '350px',
              overflow: 'hidden',
              minWidth: '200px',
              display: 'inline-block',
              width: '100%'
            }}
            className="map"
          >
            <Map center={position} zoom={4.25} style={{ height: '350px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers}
            </Map>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <div
            style={{
              height: '650px',
              overflow: 'hidden',
              minWidth: '200px',
              display: 'inline-block',
              width: '100%'
            }}
            className="map"
          >
            <Map center={position} zoom={5.25} style={{ height: '650px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers}
            </Map>
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default ClubMap;
