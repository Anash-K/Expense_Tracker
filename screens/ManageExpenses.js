import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButtton";
import { GlobalStyles } from "../components/constants/styles";
import CustomButton from "../components/CustomButton";
import { ExpensesContext } from "../store/expenses_context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const { View, Text, Pressable, StyleSheet } = require("react-native");

const ManageExpenses = ({ route }) => {
  const { id } = route.params || {};

  const isEditing = !!id;

  const navigator = useNavigation();

  const { expenses, deleteExpense, addExpense, updateExpense } =
    useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigator.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigator, isEditing]);

  const selectedExpense = expenses.find((expense) => expense.id == id);



  const handleDelete = (id) => {
    deleteExpense(id);
    navigator.goBack();
  };

  const handleCancel = () => {
    navigator.goBack();
  };

  const handleAction = (expenseData) => {
    if (isEditing) {
      updateExpense(id, expenseData);
    } else {
      addExpense(expenseData);
    }
    navigator.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        OnCancel={handleCancel}
        onSubmit={handleAction}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.innerContainer}>
          <IconButton
            IconName={"trash"}
            size={22}
            color={"red"}
            onPress={handleDelete.bind(this, id)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  innerContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.secondary700,
    alignItems: "center",
  },
});

export default ManageExpenses;
