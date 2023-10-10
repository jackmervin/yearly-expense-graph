import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //const [newInput, setInput] = useState({
  //  enterTitle: "",
  //  enterAmount: "",
  //  enterDate: ""
  //});
  const [enterTitle, setEnterTitle] = useState();
  const [enterAmount, setEnterAmount] = useState();
  const [enterDate, setEnterDate] = useState();

  //const [enterTitle,setEnterTitle]=useState()

  function handleClickTitle(event) {
    //  setInput({ ...newInput, enterTitle: event.target.value });
    setEnterTitle(event.target.value);
  }
  function handleClickAmount(event) {
    //  setInput({ ...newInput, enterAmount: event.target.value });
    setEnterAmount(event.target.value);
  }
  function handleClickDate(event) {
    //  setInput({ ...newInput, enterDate: event.target.value });
    setEnterDate(event.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();

    const expense = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpense(expense);
    setEnterAmount(" ");
    setEnterTitle(" ");
    setEnterDate(" ");

    //  setNewexpenses(newInput);
    //  console.log(newExpenses);
  }

  return (
    <form onSubmit={handelSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleClickTitle} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleClickAmount}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={handleClickDate}
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
