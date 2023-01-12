import React from 'react'
import BarChart from '../chart/BarChart';
import { data as testData, options as testOptions } from '../chart/BarChart.js';
import RangeInput from '../input/RangeInput';
const InputChart = () => {
    return (
        <div style={{ maxHeight: '10rem', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            <RangeInput />
            <BarChart options={testOptions} data={testData} />
        </div>
    )
}

export default InputChart