import { useContext } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";
import { getDateMinusDays } from "../utils/formateDate";

const { View, Text , StyleSheet} = require("react-native");

const RecentExpenses = () => {
  const data  = useContext(ExpensesContext);

  const recentExpenses = data.expenses.filter((expense) => {
    const today = new Date();
    const week = getDateMinusDays(today,7);

    return expense.date > week;
  })


  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensePeriod={'last 7 days'} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.primary700,
    },
  });

export default RecentExpenses;
