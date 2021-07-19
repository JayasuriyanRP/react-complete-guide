import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const newExpenseHandler = (expense) => {
    const spreadedExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(spreadedExpense);
    setExpenseFormVisible(false);
  };

  const addNewExpenseHandler = () => {
    setExpenseFormVisible(true);
  };

  const cancelNewExpese = () => {
    setExpenseFormVisible(false);
  };

  return (
    <div className="new-expense">
      {expenseFormVisible && (
        <ExpenseForm
          onSaveHandler={newExpenseHandler}
          onCancelHandler={cancelNewExpese}
        />
      )}

      {!expenseFormVisible && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
