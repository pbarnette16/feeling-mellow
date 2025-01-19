import React from 'react';
import { View, Button } from 'react-native';
import Toast  from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Button
      title="Show Toast"
      onPress={() => Toast.show({
        type: 'info',
        text1: 'Hello',
        text2: 'This is some something 👋'
      })
    }
    />
    <Toast />
  </View>
);

export const CustomDuration = () => (
  <View style={{ padding: 20 }}>
    <Button
      title="Show Long Toast"
      onPress={() => Toast.show('This toast will show for 5 seconds', 5000)}
    />
    <Toast />
  </View>
);

export const MultipleToasts = () => (
  <View style={{ padding: 20, gap: 10 }}>
    <Button
      title="Show First Toast"
      onPress={() => Toast.show('First toast message')}
    />
    <Button
      title="Show Second Toast"
      onPress={() => Toast.show('Second toast message')}
    />
    <Toast />
  </View>
);