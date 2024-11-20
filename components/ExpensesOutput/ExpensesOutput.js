import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";



const ExpensesOutput = ({ expenses, expensePeriod }) => {

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensePeriod} expenses={expenses} />
      <ExpensesList expensesData={expenses}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default ExpensesOutput;
