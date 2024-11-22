import { Text, View, StyleSheet, Pressable } from "react-native";

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>An Error Occurred</Text>
        <Text style={styles.message}>{message}</Text>
        <Pressable style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Okay</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    padding: 24,
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff4d4f",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff4d4f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ErrorOverlay;
