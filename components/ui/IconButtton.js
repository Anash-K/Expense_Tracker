import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const IconButton = ({ IconName, size, color, customStyles, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        customStyles,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.innerContainer}>
        <FontAwesome5Icon name={IconName} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    padding: 10,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
