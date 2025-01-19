import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MultiSelectButton } from './MultiSelectButton';

export interface WeekDaySelectProps {
  selectedDays: number[];
  onChange: (days: number[]) => void;
  disabled?: boolean;
}

const WEEKDAYS = [
  { label: 'M', value: 1 },
  { label: 'T', value: 2 },
  { label: 'W', value: 3 },
  { label: 'T', value: 4 },
  { label: 'F', value: 5 },
  { label: 'S', value: 6 },
  { label: 'S', value: 0 },
];

export const WeekDaySelect = ({
  selectedDays,
  onChange,
  disabled
}: WeekDaySelectProps) => {
  const handleDayPress = (day: number) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter(d => d !== day)
      : [...selectedDays, day];
    onChange(newSelectedDays);
  };

  return (
    <View style={styles.container}>
      {WEEKDAYS.map(({ label, value }) => (
        <MultiSelectButton
          key={value}
          label={label}
          selected={selectedDays.includes(value)}
          onPress={() => handleDayPress(value)}
          disabled={disabled}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});