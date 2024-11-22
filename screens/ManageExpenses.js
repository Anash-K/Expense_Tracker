import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import IconButton from "../components/ui/IconButtton";
import { GlobalStyles } from "../components/constants/styles";
import CustomButton from "../components/ui/CustomButton";
import { ExpensesContext } from "../store/expenses_context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import {
  deleteExpenseData,
  getExpenses,
  storeExpense,
  updateExpenseData,
} from "../utils/http";
import LoadingSpinner from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const { View, Text, Pressable, StyleSheet } = require("react-native");

const ManageExpenses = ({ route }) => {
  const { id } = route.params || {};

  const isEditing = !!id;

  const navigator = useNavigation();

  const { expenses, deleteExpense, addExpense, updateExpense } =
    useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useLayoutEffect(() => {
    navigator.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  const selectedExpense = expenses.find((expense) => expense.id == id);

  const handleDelete = async (id) => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await deleteExpenseData(id);
      deleteExpense(id);
      navigator.goBack();
    } catch (error) {
      setError("Failed to delete expense!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigator.goBack();
  };

  const handleAction = async (expenseData) => {
    try {
      setIsLoading(true);
      if (isEditing) {
        await updateExpenseData(id, expenseData);
        updateExpense(id, expenseData);
      } else {
        const newId = await storeExpense(expenseData);
        addExpense({ ...expenseData, id: newId });
      }
      navigator.goBack();
    } catch (error) {
      setError("Something went wrong!,Failed to Save Updated Expense");
    } finally {
      setIsLoading(false);
    }
  };

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
        <>
          <ExpenseForm
            isEditing={isEditing}
            onCancel={handleCancel}
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
        </>
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
