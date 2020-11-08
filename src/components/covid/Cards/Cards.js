import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '50px 0',
    },
    card: {
        margin: '2% 2% !important',
        backgroundColor: '#1a2430',
        color: 'white',
    },
    infected: {
        borderBottom: '20px solid rgba(0,0,255,0.5);',
    },
    recovered: {
        borderBottom: '20px solid rgba(0,255,0,0.5)',
    },
    deaths: {
        borderBottom: '20px solid rgba(255,0,0,0.5)',
    },
    pos: {
        color: 'rgba(255, 255, 255, .5) !important',
    }
  }));

function Cards({data: { confirmed, recovered, deaths, lastUpdate }}) {
    const classes = useStyles();

    if(!confirmed) {
        return <CircularProgress />;
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ confirmed.value } duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ recovered.value } duration={2.5} separator="," /> 
                            <small> {(recovered.value / confirmed.value * 100).toFixed(2) + "%"}</small>
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.pos} gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ deaths.value } duration={2.5} separator="," /> 
                            <small> {(deaths.value / confirmed.value * 100).toFixed(2) + "%"}</small>
                        </Typography>
                        <Typography color="textSecondary" className={classes.pos}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
