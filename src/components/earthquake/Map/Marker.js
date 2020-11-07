import React from 'react'
import { CircleMarker, Popup  } from 'react-leaflet';

function Marker({quake, index}) {
    let color = "";
    if(quake.mag < 2){
        color = "blue";
    } else if (quake.mag > 4) {
        color = "red";
    } else {
        color = "green";
    }
    return (
        <CircleMarker key={index} center={[quake.coordinates[1], quake.coordinates[0]]} color={color} radius={quake.mag*2}>
            <Popup>
                <span>
                    Mag: {quake.mag}
                    <br />{ quake.time } 
                    <br />Location: {quake.place}
                </span>
            </Popup>
        </CircleMarker>
    )
}

export default Marker
