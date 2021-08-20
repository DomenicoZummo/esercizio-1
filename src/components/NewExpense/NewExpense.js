import "./NewExpense.css";
import NewForm from "./NewForm";
const NewExspense = (props) => {
  const getItemForm = (item) => {
    const newData = {
      ...item,
      id: new Date(),
    };
    props.getDataArray(newData);
  };
  return (
    <div className="new-expense">
      <NewForm onSaveChangeItem={getItemForm} />
    </div>
  );
};

export default NewExspense;
