import { useContext } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";

const { View, Text, StyleSheet } = require("react-native");

const AllExpenses = () => {
  const data = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={data.expenses} expensePeriod={"Total"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
export default AllExpenses;
