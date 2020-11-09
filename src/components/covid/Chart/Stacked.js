import React from 'react'
import { Bar } from 'react-chartjs-2';

function Stacked({ fetchedCountries }) {

    const StackedBar = (
        fetchedCountries.length > 0 ? (
        <Bar 
            data={{
                labels: fetchedCountries.map(({Country}) => Country),
                datasets: [
                    {
                        data: fetchedCountries.map(({TotalConfirmed}) => TotalConfirmed),
                        label: 'Total Confirmed',
                        backgroundColor: 'rgb(54, 162, 235)',
                    },
                    {
                        data: fetchedCountries.map(({TotalRecovered}) => TotalRecovered),
                        label: 'Total Recovered',
                        backgroundColor: 'rgb(75, 192, 192)',
                    },
                    {
                        data: fetchedCountries.map(({TotalDeaths}) => TotalDeaths),
                        label: 'Total Deaths',
                        backgroundColor: 'rgb(255, 99, 132)',
                    }
                ]
            }}
            options={{
                scales: {
                    yAxes: [
                        {
                            stacked: true,
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            stacked: true,
                        },
                    ],
                },
            }}
        
        />
        )  : "loading..."
    );
    return (
        <div>
            { StackedBar }
        </div>
    )
}

export default Stacked
