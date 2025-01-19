import React from 'react';
import { View } from 'react-native';
import { MultiSelectButton } from './MultiSelectButton';

export default {
  title: 'Components/MultiSelectButton',
  component: MultiSelectButton,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <MultiSelectButton
      label="M"
      selected={false}
      onPress={() => console.log('pressed')}
    />
  </View>
);

export const Selected = () => (
  <View style={{ padding: 20 }}>
    <MultiSelectButton
      label="M"
      selected={true}
      onPress={() => console.log('pressed')}
    />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <MultiSelectButton
      label="M"
      selected={false}
      onPress={() => console.log('pressed')}
      disabled
    />
  </View>
);