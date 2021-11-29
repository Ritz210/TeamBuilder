import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { AppLoading } from "expo";

const stackNavigatorOptions = {
  headerShown: false,
};

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Team Builder">
        <Drawer.Screen name="Team Builder" component={TabNavigator} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = createStackNavigator(
//   {
//     Home: { screen: Home },
//     Detail: { screen: Detail },
//   },
//   {
//     defaultNavigationOptions: stackNavigatorOptions,
//   }
// );
// export default createAppContainer(AppNavigator);

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={DrawerNavigator} />
//       <Stack.Screen name="Notifications" component={TabNavigator} />
//       {/* <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
//   );
// }
