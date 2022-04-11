import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Bar} from 'react-chartjs-2'


export default function Graphs() {
    const data = [
        {name: "M", value: 2.5},
        {name: "T", value: 3.5},
        {name: "W", value: 2},
        {name: "TH", value: 4},
        {name: "F", value: 4.3}
    ]
    return (
        // <ResponsiveContainer width="100%" aspect={3}>
        //   <BarChart
        //     width={500}
        //     height={300}
        //     data={data}
        //     margin={{
        //       top: 5,
        //       right: 30,
        //       left: 20,
        //       bottom: 5,
        //     }}
        //     barSize={20}
        //   >
        //     <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        //     <YAxis />
        //     <Tooltip />
        //     <Legend />
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        //   </BarChart>
        //   <h1>Jdhvf</h1>
        // </ResponsiveContainer>
        <Bar data={data} />
      );
}
