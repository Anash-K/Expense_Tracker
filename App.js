import "./gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./components/constants/styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconButton from "./components/IconButtton";
import ExpenseContextProvider from "./store/expenses_context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = () => {
  const navigator = useNavigation();

  const handlePress = () => {
    navigator.navigate("ManageExpenses");
  };
  return (
    <BottomTab.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        sceneStyle: { backgroundColor: GlobalStyles.colors.primary700 },
        headerRight: ({ tintColor }) => (
          <IconButton
            IconName={"plus"}
            size={22}
            color={tintColor}
            styles={styles.headerIcon}
            onPress={handlePress}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="hourglass"
              size={size}
              color={color}
              style={styles.bottomIcons}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="history" size={size} color={color} style={styles.bottomIcons} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ExpensesOverview"
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    marginHorizontal: "20",
    marginBottom: 7,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 4,
    borderRadius: 20,
  },bottomIcons:{
   
  }
});
