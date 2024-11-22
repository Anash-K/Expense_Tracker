import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";

const SignUpScreen = () => {
  const navigator = useNavigation();

  const [userCredential,setUserCredential] = useState({
    email:{value:"",isValid:true},
    password:{value:"",isValid:true},
    confirmPassword:{value:"",isValid:true},
  });

  const handleLogin = () => {
    navigator.navigate("Login");
  };

  const handleSignUp = () =>{

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={userCredential.email.value}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={userCredential.password.value}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={userCredential.confirmPassword.value}
      />
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.footerText}>Already have an account? </Text>
      <Button title="Login" onPress={handleLogin} />
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
    backgroundColor: "#28a745",
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

export default SignUpScreen;
