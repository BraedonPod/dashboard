import React, { Component } from 'react'
import EarthquakeMap from './Map/QuakeMap';
import { fetchDailyData, fetchData } from '../api/earthquake';
import Statistics from './Statistics/Statistics';
import Picker from './Map/Picker';
import Cards from './Cards/Cards';

export class Index extends Component {
    state = {
        dailyData: [],
        mapSelector: "",
        mapData: [],
        mapPos: []
    }
    
    async componentDidMount() {
        const fetchedDailyData = await fetchDailyData();
        this.setState({dailyData: fetchedDailyData });
    }

    handleMapChange = async (mapSelector) => {
        const fetchedData = await fetchData(mapSelector);
        this.setState({mapData: fetchedData, mapSelector: mapSelector});
        this.setState({mapPos: []});
    }

    handleMapPos = (pos) => {
        this.setState({mapPos: pos.split(",")});
    }
    
    render() {
        const { dailyData, mapSelector, mapData, mapPos } = this.state;
        return (
            <>
                <div className="container">
                    <h1>Earthquake</h1>
                    {!mapData.length ? <Cards data={dailyData} pos={this.handleMapPos} /> : <Cards data={mapData} display={mapSelector} pos={this.handleMapPos} /> }
                    <div className="map-container">
                        <Picker handleMapChange={this.handleMapChange} />
                        <EarthquakeMap  mapData={mapData} mapSelector={mapSelector} pos={mapPos} />
                    </div>
                    {!mapData.length ? <Statistics data={dailyData} dataSource={mapSelector} /> : <Statistics data={mapData} dataSource={mapSelector} /> }
                </div>
            </>
        )
    }
}

export default Index
