import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function dropdownChangeHandle(event) {
    props.OnChangeFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandle}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
