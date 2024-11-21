import { StyleSheet, View, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, expensePeriod, fallBackText }) => {
  let content = (
    <View style={styles.emptyContainer}>
      <Text style={styles.infoText}>{fallBackText}</Text>
    </View>
  );

  if (expenses.length > 0) {
    content = <ExpensesList expensesData={expenses} />;
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
  infoText: {
    color: GlobalStyles.colors.primary50,
    fontSize:16,
    fontWeight:'bold'
  },
  emptyContainer: {
    marginHorizontal: 14,
    marginVertical:22,
    padding: 12,
    backgroundColor: GlobalStyles.colors.secondary700,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    borderRadius: 8,
    minHeight:65
  },
});

export default ExpensesOutput;
