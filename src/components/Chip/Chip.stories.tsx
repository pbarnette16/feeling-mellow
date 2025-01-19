import React from 'react';
import { View } from 'react-native';
import Chip, { ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Chip label="5 mins" />
  </View>
);
