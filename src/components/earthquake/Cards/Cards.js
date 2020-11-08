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
    hourly: {
        borderBottom: '20px solid rgba(255,255,255,0.5);',
    },
    daily: {
        borderBottom: '20px solid rgba(0,0,255,0.5);',
    },
    weekly: {
        borderBottom: '20px solid rgba(0,255,0,0.5)',
    },
    monthly: {
        borderBottom: '20px solid rgba(255,0,0,0.5)',
    },
    pos: {
        color: 'rgba(255, 255, 255, .5) !important',
    }
  }));

function Cards({ hourly, daily, weekly, monthly }) {
    const classes = useStyles();
    if(!daily) {
        return <CircularProgress />;
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.hourly)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Hourly</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ hourly } duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                        </Typography>
                        <Typography variant="body2">Number of earthquakes this past hour</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.daily)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Daily</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ daily } duration={2.5} separator="," /> 
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                        </Typography>
                        <Typography variant="body2">Number of earthquakes this past Day</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.weekly)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Weekly</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ weekly } duration={2.5} separator="," /> 
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                        </Typography>
                        <Typography variant="body2">Number of earthquakes this past Week</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(classes.card, classes.monthly)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Monthly</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ monthly } duration={2.5} separator="," /> 
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>
                            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                        </Typography>
                        <Typography variant="body2">Number of earthquakes this past Month</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
