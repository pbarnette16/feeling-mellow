import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { colors } from './constants/colors'

function App() {

  const [fontsLoaded, fontError] = Font.useFonts({
    "DM-Sands-Italic": require("./assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf"),
    "DM-Sands": require("./assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Platform Default</Text>
      <Text style={{ fontFamily: "DM-Sands-Italic" }}>DM Sands Italic</Text>
      <Text style={{ fontFamily: "DM-Sands" }}>DM Sands</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Grey['lightest-grey'].value,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DM-Sands"
  },
});

export default AppEntryPoint;
