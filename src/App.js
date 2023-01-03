import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "新電視",
    amount: 800,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "衣櫃", amount: 50, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "壽險",
    amount: 60,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "新電腦",
    amount: 1000,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
