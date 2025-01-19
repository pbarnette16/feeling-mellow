import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToastProvider from '@components/Toast/Toast';
import { RootStackParamList } from 'src/types/navigation';
import * as Font from "expo-font";

import HomeScreen from '@screens/HomeScreen';
import ScheduleScreen from '@screens/ScheduleScreen';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const [fontsLoaded, fontError] = Font.useFonts({
    "DM-Sands-Italic": require("@/assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf"),
    "DM-Sands": require("@/assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastProvider />
    </>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}


export default AppEntryPoint;
