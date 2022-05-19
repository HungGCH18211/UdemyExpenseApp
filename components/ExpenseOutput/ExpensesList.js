import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { render } from "react-dom";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
