import { useContext, useEffect, useState } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";
import { getDateMinusDays } from "../utils/formateDate";
import { getExpenses } from "../utils/http";

const { View, StyleSheet } = require("react-native");

const RecentExpenses = () => {
  const data = useContext(ExpensesContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExpenses();
        data.setExpenses(response); 
      } catch (error) {
  
      }
    };
  
    fetchData();
  }, [data]);

  const recentExpenses = data.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date >= sevenDaysAgo && expense.date <= today;
  });


  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={recentExpenses} expensePeriod={"Last 7 Days"} fallBackText={"No Expense Right Now..."}  />
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
