import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import Map from './Map/CovidMap';
import { fetchData } from '../api/covid';

export class Index extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <>
                <div className="container">
                <div className="wrapper"><h1>Covid</h1></div>
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                    <div className="wrapper"><h1>Covid Map</h1></div>
                    <Map />
                </div>
            </>
        )
    }
}

export default Index
