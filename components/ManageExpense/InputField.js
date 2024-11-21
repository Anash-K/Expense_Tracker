import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({ label, textInputConfig , style }) => {
  let inputStyle = [styles.input];


  if (textInputConfig.multiline) {
    inputStyle = [styles.multiLine];
  }

  return (
    <View style={[styles.container,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    height: 35,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    
  },
  multiLine: { 
    height: 100,
    textAlignVertical: "top",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default InputField;
