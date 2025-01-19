import React, { useState } from 'react';
import { View } from 'react-native';
import { TimeInput, TimeInputProps } from './TimeInput';

export default {
  title: 'Components/TimeInput',
  component: TimeInput,
};

export const Default = () => {
  const [value, setValue] = useState<Date>(new Date());
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={(event, date) =>{
        setValue(date)
      }} mode={"time"}/>
    </View>
  );
};

export const WithValue = () => {
  const dateStart = new Date('Monday 20 Jan 2025, 09:00 pm');
  const [value, setValue] = useState<Date>(dateStart);
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={(event, date) =>{
        setValue(date)
      }} mode={"date"}/>
    </View>
  );
};

export const Disabled = () => {
  const dateStart = new Date('Monday 20 Jan 2025, 14:30');
  const [value, setValue] = useState<Date>(dateStart);
  return (
    <View style={{ padding: 20 }}>
      <TimeInput value={value} onChange={(event, date) =>{
        setValue(date)
      }} mode={"time"}/>
    </View>
  );
};