import { useState } from "react";
import Card from "./UI/Card";
import ExpenseList from "./ExpenseList/ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = (year) => {
    setSelectedFilter(year);
  };
  const filteredExpense = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === selectedFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterSelected={handleFilter} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
