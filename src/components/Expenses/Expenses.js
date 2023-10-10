import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFliteredYear] = useState("2022");

  function filterChangHandler(selectedYear) {
    setFliteredYear(selectedYear);
    console.log(filteredYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        OnChangeFilter={filterChangHandler}
      />
      <ExpenseChart expense={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
