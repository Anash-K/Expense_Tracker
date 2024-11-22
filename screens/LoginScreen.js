import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import submitHandler from "../utils/AuthCred";

const LoginScreen = () => {
  const navigator = useNavigation();

  const handleSignUp = () => {
    navigator.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.footerText}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },
});

export default LoginScreen;
