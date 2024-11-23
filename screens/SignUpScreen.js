import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import AuthContent from "../Auth/AuthContent";
import LoadingSpinner from "../components/ui/Loading";
import { createUser } from "../utils/http";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import { AuthContext } from "../store/auth_context";

const SignUpScreen = () => {
  const navigator = useNavigation();
  const {authenticate} = useContext(AuthContext);

  const [isAuthenticating,setIsAuthenticating] = useState(false);
  const [error ,setError] = useState();

  const signUpHandler = async({email,password}) =>{
    try {
      setIsAuthenticating(true);
      let response = await createUser(email,password);
      if(response){
        authenticate(response);
      }
    } catch (error) {
      setError("Something Went Wrong!!, please Try Again");
    }finally{
      setIsAuthenticating(false);
    }
 

  }

  if(isAuthenticating){
    return <LoadingSpinner/>
  }

  const handleConfirmation = () =>{
    setError(null);
  }

  if(!isAuthenticating && error){
    return <ErrorOverlay message={error} onConfirm={handleConfirmation} />
  }

  return (
    <AuthContent isLogin={false} onAuthenticate={signUpHandler} />
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
