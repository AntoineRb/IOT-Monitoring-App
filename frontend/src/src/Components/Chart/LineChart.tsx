import React, { useEffect, useState } from 'react';

import {Chart} from 'react-google-charts';

import getAllLogsValues from '../../services/getAllLogsValues';

export type TChartValue = (string[] | number[])[];

interface ILineChartProps {
    moduleId: number
}


const LineChart: React.FunctionComponent<ILineChartProps> = (props) => {
  
  const dataParam: string[] = ["Nombre de mesure","Valeur du Module"]
  
  const [chartValues, setChartValues] = useState<number[][]>();
  useEffect( () => {  
    if( props.moduleId !== 0 ) {
      getAllLogsValues( props.moduleId, setChartValues );
    }  
  }, [props.moduleId]);
  
  const [ chartDataArr, setChartDataArr ] = useState<TChartValue>([dataParam, [0,0]]);
  useEffect(() => {
      if(chartValues !== undefined ) {
        const data: TChartValue = [dataParam];
        chartValues.forEach( valueArr => {
          data.push( valueArr );
        });
        setChartDataArr( data );
      }
  }, [chartValues]);

    const options = {
        chart: {
          title: "Evolution des valeurs de mesure du Module :"
        },
      };


    return (
    <Chart 
        chartType='Line'
        width="100%"
        height="400px"
        data={chartDataArr}
        options={options}
    />  
    );
};

export default LineChart;
