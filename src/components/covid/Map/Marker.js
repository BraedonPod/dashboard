import React from 'react';
import { CircleMarker, Popup  } from 'react-leaflet';

function Marker({country, index}) {
    return (
        <CircleMarker key={index} center={[country.Lat, country.Long]} color="red" radius={10}>
            <Popup>
                <h3>{country.Country}</h3>
                <p>Total Confirmed: {country.TotalConfirmed}</p>
                <p>Total Deaths: {country.TotalDeaths}</p>
                <p>Total Recovered: {country.TotalRecovered}</p>
                <p><small>Updated: {country.Date}</small></p>
            </Popup>
        </CircleMarker>
    )
}

export default Marker
