import Chart from "../Chart/Chart";
function ExpenseChart(props) {
  const ChartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "july", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 }
  ];
  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    ChartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={ChartDataPoints} />;
}

export default ExpenseChart;
