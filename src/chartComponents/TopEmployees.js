
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class salesByCountry extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    const top = this.props.top
    const data = top.map(t=> t = {name:t[0], sales : t.length})

    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        layout = "vertical"
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type ="number" />
        <YAxis type="category" dataKey="name"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    );
  }
}