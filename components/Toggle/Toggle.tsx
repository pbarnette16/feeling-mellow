import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from '../../constants/colors'

export interface ToggleProps {
  value: 'habit' | 'once';
  onChange: (value: 'habit' | 'once') => void;
  disabled?: boolean;
}

const Toggle = ({ value, onChange, disabled }: ToggleProps) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <TouchableOpacity
        style={[
          styles.option,
          value === 'habit' && styles.selectedOption,
        ]}
        onPress={() => onChange('habit')}
        disabled={disabled}
      >
        <Text style={[
          styles.text,
          value === 'habit' && styles.selectedText,
          disabled && styles.disabledText,
        ]}>
          Make it a habit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          value === 'once' && styles.selectedOption,
        ]}
        onPress={() => onChange('once')}
        disabled={disabled}
      >
        <Text style={[
          styles.text,
          value === 'once' && styles.selectedText,
          disabled && styles.disabledText,
        ]}>
          Once off
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.Grey['lightest-grey'].value,
    borderRadius: 14,
    padding: 6,
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05) inset"
  },
  disabled: {
    opacity: 0.5,
  },
  option: {
    flexDirection: 'column',
    flex: 1,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    height: 56,
    textAlign: 'center',
    justifyContent: 'center'
  },
  selectedOption: {
    backgroundColor: colors.Core['white'].value,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.Core['black'].value,
    fontFamily: "DM-Sans",
    opacity: 0.5,
  },
  selectedText: {
    color: colors.Core['teal'].value,
    opacity: 1
  },
  disabledText: {
    color: '#9CA3AF',
  },
});