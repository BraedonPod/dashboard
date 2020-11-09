import React from 'react';
import Chart from '../Chart/Chart';
import CircularProgress from '@material-ui/core/CircularProgress';

function Statistics({ data, dataSource }) {
    const mag = [];
    var x = 0;

    return (
        !data.length ? <CircularProgress /> : (
            <>
                {/* clean up */}
                <h2>{dataSource}</h2>
                {data.forEach((quake) => {
                    mag[x] = quake.mag;
                    x++;
                })}
                <Chart  mag={mag} />
            </>
        )
    )
}

export default Statistics
