import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { fetchDailyData } from '../../api/earthquake';
import CircularProgress from '@material-ui/core/CircularProgress';
import Marker from './Marker';
import './leaflet.css';

function QuakeMap({mapData, mapSelector}) {
    const [earthquakes, setEarthquakes] = useState([]);
    const position = [0, 0];

    useEffect(() => {
        const fetchAPI = async () => {
            setEarthquakes(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const defaultMap = (        
        earthquakes.length ? (
            <Map center={position} zoom={2} minZoom={2} worldCopyJump={true}>
                <TileLayer
                    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                {earthquakes.map((quake, index) => (
                    <Marker key={index} quake={quake} index={index} />
                ))}
            </Map>   
        ) : <CircularProgress />
    );

    const selectedMap = (
        earthquakes.length ? (
            <Map  center={position} zoom={2} minZoom={2} worldCopyJump={true}>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                {mapData.map((quake, index) => (
                    <Marker key={index} quake={quake} index={index} />
                ))}
            </Map>   
        ) : <CircularProgress />
    );

    return (
        <>
            {mapSelector ? selectedMap : defaultMap }
        </>
    )
}

export default QuakeMap
