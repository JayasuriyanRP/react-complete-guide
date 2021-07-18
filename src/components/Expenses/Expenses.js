import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = (year) => {
    setSelectedFilter(year);
    console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterSelected={handleFilter} />
        {props.expenses.map((item) => (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
