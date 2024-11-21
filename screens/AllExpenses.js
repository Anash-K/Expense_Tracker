import { useContext , useEffect } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";
import { getExpenses } from "../utils/http";

const { View, Text, StyleSheet } = require("react-native");

const AllExpenses = () => {
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

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={data.expenses}
        expensePeriod={"Total"}
        fallBackText={"No Expense ..."}
      />
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
