import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({ title, data, datakey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect= {4 / 1}>
                <LineChart  data={data}>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />  }
        
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <Tooltip />
                    {/* <CartesianGrid  stroke="#e0dfdf" strokeDasharray="5 5" /> */}
                    {/* <YAxis />
                    <Legend /> */}
                    <Line type="monotone" dataKey="Active user" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="Active User" stroke="#82ca9d" /> */}
                </LineChart>

            </ResponsiveContainer>
            
        </div>
    )
}
