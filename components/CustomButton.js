import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "./constants/styles";
import { Children } from "react";

const CustomButton = ({ buttonTitle, onPress, mode, style }) => {

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode == "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode == "flat" && styles.flatText]}>
            {buttonTitle}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.secondary700,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.secondary700,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.secondary200,
    borderRadius: 4,
  },
});

export default CustomButton;
