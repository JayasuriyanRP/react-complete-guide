import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    const spreadedExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(spreadedExpense);
    console.log(spreadedExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveHandler={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
