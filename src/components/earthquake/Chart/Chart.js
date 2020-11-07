import React from 'react'
import { HorizontalBar, Line } from 'react-chartjs-2'

const Chart = ({ mag }) => {
    const magData = [];
    mag.forEach((m) => {
        if(m<2){magData[0] = !magData[0] ? 1 : magData[0]+1}
        if(m>2 && m<3){magData[1] = !magData[1] ? 1 : magData[1]+1}
        if(m>3 && m<4){magData[2] = !magData[2] ? 1 : magData[2]+1}
        if(m>4 && m<5){magData[3] = !magData[3] ? 1 : magData[3]+1}
        if(m>5 && m<6){magData[4] = !magData[4] ? 1 : magData[4]+1}
        if(m>6 && m<7){magData[5] = !magData[5] ? 1 : magData[5]+1}
        if(m>7 && m<8){magData[6] = !magData[6] ? 1 : magData[6]+1}
        if(m>8){magData[7] = !magData[7] ? 1 : magData[7]+1}
    })

    const horizontalBarChart = (
        magData.length
        ? (
            <HorizontalBar
                data={{
                    labels: ['Less than 2', '2', '3', '4', '5', '6', '7', '8'],
                    datasets: [{
                        label: 'Magnitude',
                        backgroundColor: [
                            'rgba(109, 204, 178, 0.5)',
                            'rgba(102, 209, 126, 0.5)',
                            'rgba(148, 208, 103, 0.5)',
                            'rgba(192, 202, 87, 0.5)',
                            'rgba(203, 181, 99, 0.5)',
                            'rgba(199, 147, 75, 0.5)',
                            'rgba(199, 102, 45, 0.5)',
                            'rgba(205, 7, 0, 0.5)'
                        ],
                        data: [magData[0], magData[1], magData[2], magData[3], magData[4], magData[5], magData[6],magData[7]]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: "Magnitude" },
                }}
            />
        ) : null
    );


    const lineChart = (
        magData.length
        ? (
            <Line
                data={{
                    labels: ['Less than 2', '2', '3', '4', '5', '6', '7', '8'],
                    datasets: [{
                        label: 'Magnitude',
                        backgroundColor: 'rgba(109, 204, 178, 0.2)',
                        borderColor: 'rgba(109, 204, 178, 0.5)',
                        fill: true,
                        data: [magData[0], magData[1], magData[2], magData[3], magData[4], magData[5], magData[6],magData[7]]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: "Magnitude" },
                }}
            />
        ) : null
    );
    return (
        <>
            {horizontalBarChart}
            {lineChart}
        </>
    )
}

export default Chart
