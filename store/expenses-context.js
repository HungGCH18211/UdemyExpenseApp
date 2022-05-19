import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-07"),
  },
  {
    id: "e2",
    description: "A pair of glasses",
    amount: 12.23,
    date: new Date("2022-04-24"),
  },
  {
    id: "e3",
    description: "Books",
    amount: 41.25,
    date: new Date("2022-02-16"),
  },
  {
    id: "e4",
    description: "Bicycle",
    amount: 33.02,
    date: new Date("2022-02-16"),
  },
  {
    id: "e5",
    description: "Macbook",
    amount: 72.2,
    date: new Date("2022-02-16"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-07"),
  },
  {
    id: "e7",
    description: "A pair of glasses",
    amount: 12.23,
    date: new Date("2022-04-24"),
  },
  {
    id: "e8",
    description: "Books",
    amount: 41.25,
    date: new Date("2022-02-16"),
  },
  {
    id: "e9",
    description: "Bicycle",
    amount: 33.09,
    date: new Date("2022-02-16"),
  },
  {
    id: "e10",
    description: "Macbook",
    amount: 72.2,
    date: new Date("2022-02-16"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const ExpensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(ExpensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
