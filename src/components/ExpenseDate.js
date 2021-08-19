import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleDateString("it-IT", { month: "long" });
  const day = date.toLocaleDateString("it-IT", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
