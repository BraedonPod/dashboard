import React, { Component } from 'react'
import EarthquakeMap from './Map/QuakeMap';
import { fetchDailyData, fetchMonthlyData, fetchData } from '../api/earthquake';
import Statistics from './Statistics/Statistics';
import { withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Picker from './Map/Picker';

const styles ={
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
  };


export class Index extends Component {
    state = {
        dailyData: [],
        monthlyData: [],
        mapSelector: "",
        mapData: []
    }

    async componentDidMount() {
        const fetchedDailyData = await fetchDailyData();
        this.setState({dailyData: fetchedDailyData });
        const fetchedMontlyData = await fetchMonthlyData();
        this.setState({monthlyData: fetchedMontlyData});
    }

    handleMapChange = async (mapSelector) => {
        const fetchedData = await fetchData(mapSelector);
        this.setState({mapData: fetchedData, mapSelector: mapSelector})
    }

    render() {
        const { dailyData, monthlyData, mapSelector, mapData } = this.state;
        const { classes } = this.props;

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
                                <Picker handleMapChange={this.handleMapChange} />
                                <EarthquakeMap  mapData={mapData} mapSelector={mapSelector} />
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
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)
