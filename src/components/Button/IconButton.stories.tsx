import React from 'react';
import { View } from 'react-native';
import { IconButton } from './IconButton';
import { argTypes } from './IconButton.args';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export const Default = ({...args}) => (
  <View style={{ padding: 20 }}>
    <IconButton name="happy-outline" {...args} onPress={() => console.log('pressed')} />
  </View>
);

export const CustomSize = () => (
  <View style={{ padding: 20 }}>
    <IconButton name="close" size={32} color="#DC2626" onPress={() => console.log('pressed')} />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <IconButton name="trash" disabled onPress={() => console.log('pressed')} />
  </View>
);

export const NoBackground = () => (
  <View style={{ padding: 20 }}>
    <IconButton name="chevron-down" disabled onPress={() => console.log('pressed')} background={false} />
  </View>
);

export const Navigation = () => (
  <View style={{ padding: 20 }}>
    <IconButton name="arrow-back" onPress={() => console.log('pressed')} />
  </View>
);

export const Multiple = () => (
  <View style={{ padding: 20 }}>
    <IconButton name="arrow-back" onPress={() => console.log('arrow pressed')} />
    <IconButton name="trash-2" onPress={() => console.log('trashed pressed')} />
  </View>
);

Default.args = {
  name: 'add',
  size: 24
};

Default.argTypes = argTypes;