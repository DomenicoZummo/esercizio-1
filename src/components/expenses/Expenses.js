import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import "../UI/Card.css";
const Expenses = (props) => {
  const [filterYear, setYear] = useState(new Date().getFullYear());

  const arrayItem = props.items.filter(
    (element) => parseInt(element.date.getFullYear()) === parseInt(filterYear)
  );

  const getFilterItem = (item) => {
    setYear(item);
    console.log(item);
    console.log("Sate year", filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterItem={getFilterItem} />
        <ExpensesList items={arrayItem} />
      </Card>
    </div>
  );
};

export default Expenses;
