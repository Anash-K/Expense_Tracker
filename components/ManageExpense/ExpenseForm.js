import { Alert, StyleSheet, Text, View } from "react-native";
import InputField from "./InputField";
import { GlobalStyles } from "../constants/styles";
import { useContext, useState } from "react";
import CustomButton from "../CustomButton";
import { getFormateDate } from "../../utils/formateDate";

const ExpenseForm = ({ isEditing, onCancel, onSubmit, defaultValues }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormateDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const handleChange = (inputIdentifier, expense) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: expense };
    });
  };

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const invalidAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const invalidDate = expenseData.date.toString() != "Invalid Date";
    const invalidDescription = expenseData.description.trim().length > 0;

    if (!invalidAmount) {
      Alert.alert("Invalid Amount", "please enter a valid amount");
      return;
    } else if (!invalidDate) {
      Alert.alert("Invalid Date", "please enter a valid date");
      return;
    } else if (!invalidDescription) {
      Alert.alert("Invalid Description", "please enter a valid description");
      return;
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.innerRow}>
        <InputField
          style={styles.inputBox}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: handleChange.bind(null, "amount"),
            value: inputValues.amount,
          }}
        />
        <InputField
          style={styles.inputBox}
          label={"Date"}
          textInputConfig={{
            onChangeText: handleChange,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: handleChange.bind(null, "date"),
          }}
        />
      </View>

      <InputField
        label={"Description"}
        textInputConfig={{
          onChangeText: handleChange,
          multiline: true,
          onChangeText: handleChange.bind(null, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <CustomButton onPress={onCancel} mode={"flat"} buttonTitle={"Cancel"} />
        <CustomButton
          onPress={handleSubmit}
          buttonTitle={isEditing ? "Update" : "Add Expense"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
  },
  inputBox: {
    flex: 1,
  },
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: GlobalStyles.colors.secondary500,
    letterSpacing: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    columnGap: 10,
  },
});
export default ExpenseForm;
