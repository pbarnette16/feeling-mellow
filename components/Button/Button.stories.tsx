import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Button title="Press Me" onPress={() => console.log('pressed')} />
  </View>
);

export const Active = () => (
  <View style={{ padding: 20 }}>
    <Button title="Active Button" variant="active" onPress={() => console.log('pressed')} />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <Button title="Disabled Button" disabled onPress={() => console.log('pressed')} />
  </View>
);