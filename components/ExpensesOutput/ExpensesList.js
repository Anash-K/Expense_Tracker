import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expensesData }) => {
  const renderComponent = ({ item }) => {
    return <ExpenseItem dataItem={item} />;
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={expensesData}
        renderItem={renderComponent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  innerContainer: {
    flexDirection: "row",
    columnGap: 20,
  },
});

export default ExpensesList;
