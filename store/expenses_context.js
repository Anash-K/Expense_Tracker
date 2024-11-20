import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const DummyExpenses = [
  {
    id: "e1",
    description: "Car Insurance",
    amount: 100,
    date: new Date("2023-2-21"),
  },
  {
    id: "e2",
    description: "Door Service",
    amount: 200,
    date: new Date("2024-11-2"),
  },
  {
    id: "e3",
    description: "Car Service",
    amount: 500,
    date: new Date("2024-11-5"),
  },
  {
    id: "e4",
    description: "Door Service",
    amount: 200,
    date: new Date("2024-11-2"),
  },
  {
    id: "e5",
    description: "Washroom Tap",
    amount: 300,
    date: new Date("2024-11-6"),
  },
  {
    id: "e6",
    description: "New Car Lamborghini Urus",
    amount: 2500,
    date: new Date("2024-11-12"),
  },
  {
    id: "e7",
    description: "New Car BMW i8",
    amount: 1800,
    date: new Date("2024-11-13"),
  },
];


const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toISOString() + Math.random().toString();
      return [...state, { ...action.payload, id }];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense
      );
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expenseState, dispatcher] = useReducer(expenseReducer, DummyExpenses);

  const addExpense = (expenseData) => {
    dispatcher({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatcher({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatcher({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expenseState,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
