import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
