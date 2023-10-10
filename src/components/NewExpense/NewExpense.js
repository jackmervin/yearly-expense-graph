import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function SaveExpenseHandler(enterExpenseAdd) {
    const expenseData = {
      ...enterExpenseAdd,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={SaveExpenseHandler}
          onCancle={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
