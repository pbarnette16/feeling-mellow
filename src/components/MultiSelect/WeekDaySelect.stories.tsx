import React, { useState } from 'react';
import { View } from 'react-native';
import { WeekDaySelect } from './WeekDaySelect';

export default {
  title: 'Components/WeekDaySelect',
  component: WeekDaySelect,
};

export const Default = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  return (
    <View style={{ padding: 20 }}>
      <WeekDaySelect selectedDays={selectedDays} onChange={setSelectedDays} />
    </View>
  );
};

export const WithSelection = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 3, 5]);
  return (
    <View style={{ padding: 20 }}>
      <WeekDaySelect selectedDays={selectedDays} onChange={setSelectedDays} />
    </View>
  );
};

export const Disabled = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 3, 5]);
  return (
    <View style={{ padding: 20 }}>
      <WeekDaySelect selectedDays={selectedDays} onChange={setSelectedDays} disabled />
    </View>
  );
};