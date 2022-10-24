import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid} from 'recharts';
import { data } from '../../helpers/charts';
import styles from './Charts.module.css'

const Charts = () => {
  return (
    <div className={styles.charts} >
      <h3 className={styles.chartTitle}>Population to Years</h3>
      <ResponsiveContainer width="100%" height="100%"  aspect={8} >
        <LineChart width={500}
          height={300}  data ={data}>
           <XAxis  dataKey='years' stroke="#5550bd" />
          <Line type="monotone" dataKey='country' stroke="#5550bd"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#e0defd" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey='population' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts;

