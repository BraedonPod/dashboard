import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '50px 0',
    },
    card: {
        margin: '2% 2% !important',
        backgroundColor: '#1a2430',
        color: 'white',
    },
    total: {
        borderBottom: '20px solid rgba(0,0,255,0.5);',
    },
    smallMag: {
        borderBottom: '20px solid rgba(0,255,0,0.5)',
    },
    mag: {
        borderBottom: '20px solid rgba(255,0,0,0.5)',
    },
    pos: {
        color: 'rgba(255, 255, 255, .5) !important',
    },
    coords: {
        color: 'lightblue',
        '&:hover' : {
            color: 'blue',
        },
    }
  }));

function Cards({ data, display, pos }) {
    const classes = useStyles();
    
    if(data.length === 0) {return <CircularProgress />;}
    if(display === undefined){display = "all_day"}
    data.sort(function(a, b) {
        return b.mag - a.mag;
    })

    return (
        <div className={classes.container}>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.total)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Total</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ data.length } duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                        </Typography>
                        <Typography variant="body2">Number of earthquakes this past {display.split("_")[1]}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.smallMag)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Smallest Earthquake</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ data[data.length-1].mag } duration={2.5} separator=","  decimals={1} /> 
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{data[data.length-1].time}</small>
                        </Typography>
                        <Typography variant="body2">{data[data.length-1].place}</Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small className={classes.coords} onClick={(e) => pos(data[data.length-1].coordinates[1] + ", "+ data[data.length-1].coordinates[0])}>
                                {data[data.length-1].coordinates[1]}, {data[data.length-1].coordinates[0]}
                            </small>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.mag)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Biggest Earthquake</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ data[0].mag } duration={2.5} separator=","  decimals={1} /> 
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{data[0].time}</small>
                        </Typography>
                        <Typography variant="body2">{data[0].place}</Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small className={classes.coords} onClick={(e) => pos(data[0].coordinates[1]+", "+ data[0].coordinates[0])}>
                                {data[0].coordinates[1]}, {data[0].coordinates[0]}
                            </small>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
