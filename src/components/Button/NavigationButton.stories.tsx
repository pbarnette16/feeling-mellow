import React from 'react';
import { View } from 'react-native';
import { NavigationButton } from './NavigationButton';

export default {
  title: 'Components/NavigationButton',
  component: NavigationButton,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <NavigationButton title="Go to Settings" onPress={() => console.log('pressed')} />
  </View>
);

export const WithIcon = () => (
  <View style={{ padding: 20 }}>
    <NavigationButton
      title="Back to Home"
      iconName="arrow-back"
      onPress={() => console.log('pressed')}
    />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <NavigationButton
      title="Disabled Navigation"
      iconName="settings"
      disabled
      onPress={() => console.log('pressed')}
    />
  </View>
);