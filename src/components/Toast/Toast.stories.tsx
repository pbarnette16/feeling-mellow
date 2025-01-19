import React from 'react';
import { View, Button } from 'react-native';
import ToastProvider  from './Toast';

export default {
  title: 'Components/Toast',
  component: ToastProvider,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Button
      title="Show Toast"
      onPress={() => ToastProvider.show({
        type: 'info',
        text1: 'Hello',
        text2: 'This is some something 👋'
      })
    }
    />
    <ToastProvider />
  </View>
);

export const CustomDuration = () => (
  <View style={{ padding: 20 }}>
    <Button
      title="Show Long Toast"
      onPress={() => ToastProvider.show('This toast will show for 5 seconds', 5000)}
    />
    <ToastProvider />
  </View>
);

export const MultipleToasts = () => (
  <View style={{ padding: 20, gap: 10 }}>
    <Button
      title="Show First Toast"
      onPress={() => ToastProvider.show('First toast message')}
    />
    <Button
      title="Show Second Toast"
      onPress={() => ToastProvider.show('Second toast message')}
    />
    <ToastProvider />
  </View>
);