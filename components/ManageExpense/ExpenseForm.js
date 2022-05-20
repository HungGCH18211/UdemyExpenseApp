import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {};
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{ multiline: true }} />
    </View>
  );
};

export default ExpenseForm;
