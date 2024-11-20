import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce(
    (prevValue, currentVal, index) => prevValue + currentVal.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.expense}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.secondary500,
    fontWeight:'bold',
    textTransform:'capitalize'
  },
  expense: {
    color: GlobalStyles.colors.secondary500,
    fontSize: 16,
    fontWeight:'bold',
  },
});

export default ExpensesSummary;
