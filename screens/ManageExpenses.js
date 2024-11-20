import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButtton";
import { GlobalStyles } from "../components/constants/styles";
import CustomButton from "../components/CustomButton";
import { ExpensesContext } from "../store/expenses_context";

const { View, Text, Pressable, StyleSheet } = require("react-native");

const ManageExpenses = ({ route }) => {
  const { id } = route.params || {};

  const isEditing = !!id;

  const navigator = useNavigation();

  const { expenses, deleteExpense , addExpense , updateExpense} = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigator.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigator, isEditing]);

  const handleDelete = (id) => {
    deleteExpense(id);
    navigator.goBack();
    // console.log(id,"testing")
  };

  const handleCancel = () => {
    console.log("cancel");
    navigator.goBack();
  };

  const handleAction = () => {
    if(isEditing){
      updateExpense(
        id,{
        description:'gardening machine',
        date: '2024-11-20',
        amount: 1000,
      });
    }else{
      addExpense({
        description:'Baseball Bat',
        date: '2024-11-20',
        amount: 210,
      })
    };
    navigator.goBack();
  };

  return (
    <View style={styles.container}>
      <Text> ManageExpenses {id} </Text>
      <View style={styles.buttons}>
        <CustomButton
          onPress={handleCancel}
          mode={"flat"}
          buttonTitle={"Cancel"}
        />
        <CustomButton
          onPress={handleAction}
          buttonTitle={isEditing ? "Update" : "Add"}
        />
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    columnGap: 10,
  },
});

export default ManageExpenses;
