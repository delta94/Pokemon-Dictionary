import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { commonStyles } from "./src/styles/styleConfig";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import Moves from "./src/screens/Moves";

export default function App() {
  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    Pokemon_GB: require("./assets/fonts/PokemonGb-RAeo.ttf"),
    Unown: require("./assets/fonts/PokemonUnownGb-YAWa.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Pokemon Search",
            headerStyle: commonStyles.headerStyle,
            headerTitleStyle: commonStyles.headerTitleText,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: commonStyles.headerStyle,
            headerTitleStyle: commonStyles.headerTitleText,
            headerBackTitle: "Back",
          })}
        />
        <Stack.Screen
          name="Moves"
          component={Moves}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: commonStyles.headerStyle,
            headerTitleStyle: commonStyles.headerTitleText,
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
