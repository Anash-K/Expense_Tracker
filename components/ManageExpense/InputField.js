import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({ label, textInputConfig, style, isInValid }) => {
  let inputStyle = [styles.input];

  if (textInputConfig.multiline) {
    inputStyle = [styles.multiLine];
  }

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.label,
          isInValid ? styles.errorLabel : styles.normalLabel,
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[
          inputStyle,
          isInValid ? styles.errorBorder : styles.normalBorder,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  normalLabel: {
    color: "#333",
  },
  errorLabel: {
    color: "red",
  },
  errorBorder: {
    borderColor: "red",
  },
  normalBorder: {
    borderColor: "#ccc",
  },
  input: {
    paddingVertical:10,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  multiLine: {
    height: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default InputField;
