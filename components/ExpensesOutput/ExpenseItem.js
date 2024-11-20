import { Pressable, StyleSheet, Text, View } from "react-native";
import { formatDate } from "../../utils/formateDate";
import { GlobalStyles } from "../constants/styles";
import { HoverEffect } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ dataItem }) => {
  const navigator = useNavigation();
  const expensePresHandler = () => {
    navigator.navigate("ManageExpenses",{
      id: dataItem.id,
    });
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={expensePresHandler}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={[styles.description, styles.textBase]}>
              {dataItem.description}
            </Text>
            <Text style={styles.textBase}>{formatDate(dataItem.date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{dataItem.amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  pressable: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.secondary700,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    borderRadius: 8,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.secondary700,
    fontWeight: "bold",
  },
  pressed: {
    backgroundColor: "#62c0df",
  },
});

export default ExpenseItem;
