import { useState } from "react";
import { StyleSheet, View } from "react-native";

import CustomButton from "../components/ui/CustomButton";
import InputField from "../components/ManageExpense/InputField";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <InputField
          label="Email Address"
          textInputConfig={{
            onChangeText: (text) => updateInputValueHandler("email", text),
            value: enteredEmail,
            keyboardType: "email-address",
            autoCapitalize: "none",
          }}
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <InputField
            label="Confirm Email Address"
            textInputConfig={{
              onChangeText: (text) =>
                updateInputValueHandler("confirmEmail", text),
              value: enteredConfirmEmail,
              keyboardType: "email-address",
              autoCapitalize: "none",
            }}
            isInvalid={emailsDontMatch}
          />
        )}
        <InputField
          label="Password"
          textInputConfig={{
            onChangeText: (text) => updateInputValueHandler("password", text),
            secureTextEntry: true,
            value: enteredPassword,
            autoCapitalize: "none",
          }}          
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <InputField
            label="Confirm Password"
            textInputConfig={{
              onChangeText: (text) =>
                updateInputValueHandler("confirmPassword", text),
              secureTextEntry: true,
              value: enteredConfirmPassword,
              autoCapitalize: "none",
            }}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <CustomButton
            onPress={submitHandler}
            buttonTitle={isLogin ? "Log In" : "Sign Up"}
          />
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
