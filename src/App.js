import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dum = [
  { id: "1", title: "Car Insurance", amount: 250, date: new Date(2022, 5, 28) },
  { id: "2", title: "New TV", amount: 450, date: new Date(2022, 2, 28) }
];
export default function App() {
  const [expense, setExpense] = useState(Dum);

  function AddExpenseHandler(expense) {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}
