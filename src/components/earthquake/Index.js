import React, { Component } from 'react'
import EarthquakeMap from './Map/QuakeMap';
import { fetchDailyData, fetchMonthlyData, fetchData, fetchHourlyData, fetchWeeklyData } from '../api/earthquake';
import Statistics from './Statistics/Statistics';
import Picker from './Map/Picker';
import Cards from './Cards/Cards';
import Grid from '@material-ui/core/Grid';



export class Index extends Component {
    state = {
        dailyData: [],
        hourlyData: [],
        weeklyData: [],
        monthlyData: [],
        mapSelector: "",
        mapData: []
    }

    //Clean this up!
    async componentDidMount() {
        const fetchedDailyData = await fetchDailyData();
        this.setState({dailyData: fetchedDailyData });
        const fetchedMontlyData = await fetchMonthlyData();
        this.setState({monthlyData: fetchedMontlyData});

        const fetchedHourlyData = await fetchHourlyData();
        this.setState({hourlyData: fetchedHourlyData});
        const fetchedWeeklyData = await fetchWeeklyData();
        this.setState({weeklyData: fetchedWeeklyData});
    }

    handleMapChange = async (mapSelector) => {
        const fetchedData = await fetchData(mapSelector);
        this.setState({mapData: fetchedData, mapSelector: mapSelector})
    }

    render() {
        const { dailyData, monthlyData, mapSelector, mapData, weeklyData, hourlyData } = this.state;
        return (
            <>
                <div className="container">
                    <h1>Earthquake</h1>
                    <Cards hourly={hourlyData.length} daily={dailyData.length} weekly={weeklyData.length} monthly={monthlyData.length} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Picker handleMapChange={this.handleMapChange} />
                            <EarthquakeMap  mapData={mapData} mapSelector={mapSelector} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Statistics data={mapData} />
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default Index
