import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import CircularProgress from '@material-ui/core/CircularProgress';
import Marker from './Marker';
import Covid from '../../api/countries-daily.json';
import '../../../leaflet.css';

function CovidMap() {
    let position = [0, 0];

    const defaultMap = (        
        Covid.Countries.length ? (
            <Map center={position} zoom={2} minZoom={2} worldCopyJump={true}>
                <TileLayer
                    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {Covid.Countries.map((country, index) => (
                    <Marker key={index} country={country} index={index} />
                ))}
            </Map>   
        ) : <CircularProgress />
    );

    return (
        <div className="map-container">
            {defaultMap}
        </div>
    )
}

export default CovidMap
