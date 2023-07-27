import React from "react";
import "./TradeChart.css";
import data from "./data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TradeChart() {
  return (
    <div className="TradeChart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="5550bd" />
          <Line type="monotone" dataKey="User" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// class Example extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="pv"
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//           />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }
