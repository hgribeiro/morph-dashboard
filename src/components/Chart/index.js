import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function Chart({ eixoX, eixoY }) {
  const [data, setData] = useState([]);
  const comprimento = eixoX.length;
  const dataArray = [];
  useEffect(() => {
    for (let i = 0; i < comprimento; i++) {
      dataArray.push({
        name: eixoX[i],
        value: eixoY[i],
      });
    }
    console.log(dataArray);
    setData(dataArray);
  }, [eixoX, eixoY]);

  return (
    <BarChart
      width={900}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default Chart;
