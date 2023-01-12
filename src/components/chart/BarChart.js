import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,)



const labels = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        position: 'top',
      },
      y: {
  
        reverse: false,
        display: false,
        beginAtZero: true
      }
    }
  };
export const data =  {
    labels: labels,
    datasets: [
        {
            data: labels?.map(() => faker.datatype.number({ min: -20000, max: 0 })),
            backgroundColor: '#3498DB',
        },
       
    ],
};

const BarChart = ({data,options}) => {
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart

