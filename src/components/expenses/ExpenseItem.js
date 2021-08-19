import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = ({ amount, date, title }) => {
  const [titleDate, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("update");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleDate}</h2>
        <div className="expense-item__price">{amount} €</div>
        <button onClick={clickHandler}>BUTTON</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
