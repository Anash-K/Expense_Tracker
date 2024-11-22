import { Alert, StyleSheet, Text, View } from "react-native";
import InputField from "./InputField";
import { GlobalStyles } from "../constants/styles";
import { useContext, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { getFormateDate } from "../../utils/formateDate";

const ExpenseForm = ({ isEditing, onCancel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormateDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const handleChange = (inputIdentifier, expense) => {
    if(inputIdentifier == "description"){
      debugger;
    }
    setInputs((prevState) => ({
      ...prevState,
      [inputIdentifier]: { value: expense, isValid: true },
    }));
  };
  

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const invalidAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const invalidDate = expenseData.date.toString() != "Invalid Date";
    const invalidDescription = expenseData.description.trim().length > 0;

    if (!invalidAmount || !invalidDate || !invalidDescription) {
      Alert.alert("Invalid Amount", "please check your input values");
      setInputs((curInput) => {
        return {
          amount: {
            value: !invalidAmount ? "" : inputs.amount.value,
            isValid: invalidAmount,
          },
          date: {
            value: !invalidDate ? "" : inputs.date.value,
            isValid: invalidDate,
          },
          description: {
            value: !invalidDescription ? "" : inputs.description.value,
            isValid: invalidDescription,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  let error =
    !inputs.description.isValid ||
    !inputs.amount.isValid ||
    !inputs.date.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.innerRow}>
        <InputField
          style={styles.inputBox}
          label={"Amount"}
          isInValid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (value) => handleChange("amount", value),
            value: inputs.amount.value,
          }}
        />

        <InputField
          style={styles.inputBox}
          label={"Date"}
          isInValid={!inputs.date.isValid}
          textInputConfig={{
            onChangeText: handleChange,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: (value) => handleChange("date", value),
          }}
        />
      </View>

      <InputField
        label={"Description"}
        isInValid={!inputs.description.isValid}
        textInputConfig={{
          onChangeText: handleChange,
          multiline: true,
          onChangeText: (value) => handleChange("description", value),
          value: inputs.description.value,
        }}
      />
      {error && <Text style={styles.error}>Invalid Input : check Your values</Text>}
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
  error: {
    color: "red",
    fontSize: 10,
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
  },
});
export default ExpenseForm;
