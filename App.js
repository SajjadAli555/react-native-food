import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StackRouter } from "react-navigation";
import SearchScreen from "./src/screen/SearchScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Business Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
