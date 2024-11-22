import { useContext, useEffect, useState } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";
import { getDateMinusDays } from "../utils/formateDate";
import { getExpenses } from "../utils/http";
import LoadingSpinner from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const { View, StyleSheet } = require("react-native");

const RecentExpenses = () => {
  const data = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  const[error,setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExpenses();
        data.setExpenses(response);
      } catch (error) {
        setError("Couldn't fetch Expenses!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data]);

  const recentExpenses = data.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date >= sevenDaysAgo && expense.date <= today;
  });

  const handleConfirm = () =>{
    setError(null);
  }

  if(error && !isLoading){
    return <ErrorOverlay message={error} onConfirm={handleConfirm}/>
  }


  return (
    <View style={styles.container}>
       {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ExpensesOutput
          expenses={recentExpenses}
          expensePeriod={"Total"}
          fallBackText={"No Expense Right Now ..."}
        />
      )}
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
