import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { fetchDailyData } from '../../api/earthquake';
import CircularProgress from '@material-ui/core/CircularProgress';
import Marker from './Marker';
import './leaflet.css';

function QuakeMap({mapData, mapSelector, pos}) {
    const [earthquakes, setEarthquakes] = useState([]);
    let position = [0, 0];
    let zoom = 2;
    useEffect(() => {
        const fetchAPI = async () => {
            setEarthquakes(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    if(pos.length !== 0){zoom = 10; position = pos;}

    const handleClick = (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
    }
    const defaultMap = (        
        earthquakes.length ? (
            <Map center={position} zoom={zoom} minZoom={2} worldCopyJump={true} onclick={handleClick}>
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
        mapData.length ? (
            <Map  center={position} zoom={zoom} minZoom={2} worldCopyJump={true} onclick={handleClick}>
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
