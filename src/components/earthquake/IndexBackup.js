import React, { useState, useEffect } from 'react'
import EarthquakeMap from './Map/QuakeMap';
import { fetchDailyData, fetchMonthlyData } from '../api/earthquake';
import Statistics from './Statistics/Statistics';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    grid: {
        textAlign: 'center',
    },
    gridItems: {
        color: 'white',
        marginBottom: 10,
    }, 
    paper: {
        backgroundColor: '#1a2430',
        color: 'white',
        height: 600,
    }
  }));

function Index() {
    const classes = useStyles();
    const [dailyData, setDailyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
            setMonthlyData(await fetchMonthlyData());
        }
        fetchAPI();
    }, []);

    return (
        <>
            <div className="container">
                <h1>Earthquake</h1>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12} md={3} className={classes.gridItems}>
                        <Paper className={classes.paper}>
                            <h2 className="earthquake-status-title">Daily</h2>
                            <Statistics data={dailyData} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridItems}>
                        <Paper className={classes.paper}>
                            <EarthquakeMap />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItems}> 
                        <Paper className={classes.paper}>
                            <h2 className="earthquake-status-title">Past 30 Days</h2>
                            <Statistics data={monthlyData} />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12} md={3} className={classes.gridItems}>
                        <Paper className={classes.paper}>
                            <h2 className="earthquake-status-title">Daily by Country</h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridItems}>
                        <Paper className={classes.paper}>
                            <h2 className="earthquake-status-title">Earthquake Faqs</h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.gridItems}> 
                        <Paper className={classes.paper}>
                            <h2 className="earthquake-status-title">Past 30 Days by Country</h2>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Index
