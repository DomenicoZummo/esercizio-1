import "./NewForm.css";

import { useState } from "react";

const NewForm = (props) => {
  const [newTitle, setTitle] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDate, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.onSaveChangeItem(newData);

    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* Text */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>

        {/* Amount */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={newAmount}
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        {/* Date */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default NewForm;
