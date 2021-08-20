import Expenses from "./components/expenses/Expenses";
import NewExspense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const Dummy_Expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(Dummy_Expense);

  const getNewDataItem = (item) => {
    console.log("App.js");
    console.log(item);
    setExpense((prevExpenses) => {
      return [item, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExspense getDataArray={getNewDataItem} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
