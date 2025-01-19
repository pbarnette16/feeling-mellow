import React from 'react';
import { View } from 'react-native';
import { ColorPalette } from './ColorPalette';

export default {
  title: 'Style Guide/Colors',
  component: ColorPalette,
};

export const AllColors = () => (
  <View style={{ padding: 20, height: '100%' }}>
    <ColorPalette />
  </View>
);