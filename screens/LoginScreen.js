import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import AuthContent from "../Auth/AuthContent";
import LoadingSpinner from "../components/ui/Loading";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import { login } from "../utils/http";
import { AuthContext } from "../store/auth_context";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { authenticate } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await login(email, password);
      if (token) {
        authenticate(token); 
      }
    } catch (err) {
      setError("Could not log in. Please check your network or credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleErrorConfirm = () => setError(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={handleErrorConfirm} />;
  }

  return (
    <View style={styles.container}>
      <AuthContent isLogin={true} onAuthenticate={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
});

export default LoginScreen;
