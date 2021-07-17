import './chart.css'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Kindergaten 1',
    Student: 80,
   
  },
  {
    name: 'Kindergaten 2',
    Student: 51,
   
  },
  {
    name: 'Class 1',
    Student: 85,
    
  },
  {
    name: 'Class 2',
    Student: 75,
   
  },
  {
    name: 'Class 3',
    Student: 46,
    
    
  },
  {
    name: 'Class 4',
    Student: 88,
    
  },
  {
    name: 'Class 5',
    Student: 100,
   
  },
  {
    name: 'Class 6',
    Student: 83,
    
  },
  {
    name: 'Class 7',
    Student: 90,
    
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">Students Attendance</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#555526"/>
            <Line type="monotone" dataKey="Student" stroke="#555526" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
