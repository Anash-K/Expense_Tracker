import { ActivityIndicator, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.accent500} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: GlobalStyles.colors.primary700, 
  },
});

export default LoadingSpinner;
