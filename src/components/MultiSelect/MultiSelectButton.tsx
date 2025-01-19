import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {colors} from '../../constants/colors'

export interface MultiSelectButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export const MultiSelectButton = ({
  label,
  selected,
  onPress,
  disabled
}: MultiSelectButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        selected && styles.selected,
        disabled && styles.disabled
      ]}
    >
      <Text style={[
        styles.text,
        selected && styles.selectedText,
        disabled && styles.disabledText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44
  },
  selected: {
    backgroundColor: colors.Core['teal'].value,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.Grey['dark-grey'].value,
    fontFamily: 'DM-Sans'
  },
  selectedText: {
    color: '#FFFFFF',
  },
  disabledText: {
    color: '#9CA3AF',
  },
});