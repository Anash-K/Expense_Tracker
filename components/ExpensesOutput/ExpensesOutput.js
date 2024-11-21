import { StyleSheet, View, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, expensePeriod , fallBackText }) => {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    content =  <ExpensesList expensesData={expenses} />;
  }


  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensePeriod} expenses={expenses} />
     {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  infoText: {},
});

export default ExpensesOutput;
