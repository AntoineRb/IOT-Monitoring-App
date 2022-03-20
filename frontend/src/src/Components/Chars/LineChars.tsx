import React from 'react';

import {Chart} from 'react-google-charts';

type chartValue = [ Date, number];

interface ILineChartProps {
    chartData: [ chartValue ];
}

const LineChart: React.FunctionComponent<ILineChartProps> = (props) => {

    const options = {
        chart: {
          title: "Evolution des valeurs de mesure du Module :"
        },
      };

    const data = [
  [
    { type: "date", label: "Day" },
    "Valeur du Module"
  ],
  [new Date(2014, 0),  5.7],
  [new Date(2014, 1),  8.7],
  [new Date(2014, 2),  12],
  [new Date(2014, 3),  15.3],
  [new Date(2014, 4),  18.6],
  [new Date(2014, 5), 20.9],
  [new Date(2014, 6),  19.8],
  [new Date(2014, 7),  16.6],
  [new Date(2014, 8),  13.3],
  [new Date(2014, 9),  9.9],
  [new Date(2014, 10),  6.6],
  [new Date(2014, 11),  4.5],
];

    return (
    <Chart 
        chartType='Line'
        width="100%"
        height="400px"
        data={data}
        options={options}
    />  
    );
};

export default LineChart;
