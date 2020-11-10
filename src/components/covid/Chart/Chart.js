import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/covid';
import { Line, Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        margin: 'auto',
        '@media (max-width: 768px)': {
            margin: '2% 0 !important',
            width: '100%',
          },
    },
  }));

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => moment(date).add(1, 'days').format("YYYY-MM-DD")),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed ),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },{
                        data: dailyData.map(({ deaths }) => deaths ),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    },{
                        data: dailyData.map(({recovered}) => recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                      },],
                }}
            />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text:`Current State in ${country}` },
                }}
            />
        ) : null
    );

    return (
        <div className={classes.container}>
            {country ? barChart : lineChart }
        </div>
    )
}

export default Chart
