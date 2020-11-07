import React from 'react';

function Testapp() {
    let place = "3 km SSW of Big Lake, Alaska";
    //let place = "South Shetland Islands";
    let placeArray = place.split(",")
    let placeArraySplit  = placeArray[0].split("of");

    let countryName = placeArray[placeArray.length -1].trim();

    console.log(placeArray);
    console.log(placeArraySplit);
    console.log(countryName);


    return (
        <>
            <h1>TESTING</h1>
            
        </>

    )
}

export default Testapp
