import React, { useState } from 'react';
import { View } from 'react-native';
import { Toggle }  from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const Default = () => {
  const [value, setValue] = useState<'habit' | 'once'>('habit');
  return (
    <View style={{ padding: 20 }}>
      <Toggle value={value} onChange={setValue} />
    </View>
  );
};

export const OnceSelected = () => {
  const [value, setValue] = useState<'habit' | 'once'>('once');
  return (
    <View style={{ padding: 20 }}>
      <Toggle value={value} onChange={setValue} />
    </View>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState<'habit' | 'once'>('habit');
  return (
    <View style={{ padding: 20 }}>
      <Toggle value={value} onChange={setValue} disabled />
    </View>
  );
};