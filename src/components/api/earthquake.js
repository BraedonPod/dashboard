import axios from 'axios';
import moment from 'moment';

const dailyUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
const monthlyUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";

export const fetchData = async (timeset) => {
    let changeableUrl = url + timeset + ".geojson";
    try {
        const { data: {features} } = await axios.get(`${changeableUrl}`);
        const modifiedData = features.map((data) => ({
            id: data.id,
            coordinates: data.geometry.coordinates,
            title: data.properties.title,
            time: moment(data.properties.time).format("dddd, MMMM Do YYYY, h:mm:ss a"),
            mag: data.properties.mag,
            place: data.properties.place,
        }));
        return modifiedData;
    } catch(error) {}
}

export const fetchDailyData = async () => {
    try {
        const { data: {features} } = await axios.get(`${dailyUrl}`);
        const modifiedData = features.map((data) => ({
            id: data.id,
            coordinates: data.geometry.coordinates,
            title: data.properties.title,
            time: moment(data.properties.time).format("dddd, MMMM Do YYYY, h:mm:ss a"),
            mag: data.properties.mag,
            place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchMonthlyData = async () => {
    try {
        const { data: {features} } = await axios.get(`${monthlyUrl}`);
        const modifiedData = features.map((data) => ({
            id: data.id,
            coordinates: data.geometry.coordinates,
            title: data.properties.title,
            time: moment(data.properties.time).format("dddd, MMMM Do YYYY, h:mm:ss a"),
            mag: data.properties.mag,
            place: data.properties.place,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}