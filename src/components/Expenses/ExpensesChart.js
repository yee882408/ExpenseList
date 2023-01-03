import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "一月", value: 0 },
    { label: "二月", value: 0 },
    { label: "三月", value: 0 },
    { label: "四月", value: 0 },
    { label: "五月", value: 0 },
    { label: "六月", value: 0 },
    { label: "七月", value: 0 },
    { label: "八月", value: 0 },
    { label: "九月", value: 0 },
    { label: "十月", value: 0 },
    { label: "十一月", value: 0 },
    { label: "十二月", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
