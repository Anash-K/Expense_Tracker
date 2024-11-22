import { useContext, useEffect, useState } from "react";
import { GlobalStyles } from "../components/constants/styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses_context";
import { getExpenses } from "../utils/http";
import LoadingSpinner from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const { View, Text, StyleSheet } = require("react-native");

const AllExpenses = () => {
  const data = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExpenses();
        data.setExpenses(response);
      } catch (error) {
        setError("Failed to fetch expenses:");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data]);

  const handleConfirm = () => {
    setError(null);
  };

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={handleConfirm} />;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ExpensesOutput
          expenses={data.expenses}
          expensePeriod={"Total"}
          fallBackText={"No Expense ..."}
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
export default AllExpenses;
