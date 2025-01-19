import React, { useState } from 'react';
import { View } from 'react-native';
import { TimeInput, TimeInputProps } from './TimeInput';

export default {
  title: 'Components/TimeInput',
  component: TimeInput,
};

export const Default = () => {
  const [value, setValue] = useState(new Date());
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={setValue} />
    </View>
  );
};

export const WithValue = () => {
  const [value, setValue] = useState('09:00 pm');
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={setValue} />
    </View>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState('14:30 pm');
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={setValue} disabled />
    </View>
  );
};