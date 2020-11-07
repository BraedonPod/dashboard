import React from 'react';
import Chart from '../Chart/Chart';
import CountUp from 'react-countup';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

function Statistics({ data }) {
    const mag = [];
    var x = 0;

    return (
        !data.length ? <CircularProgress /> : (
            <>
                Total: <CountUp start={0} end={data.length} duration={3} /> 
                    <br /> 
                <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
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
