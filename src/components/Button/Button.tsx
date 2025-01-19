import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {colors} from '../../constants/colors'


export type ButtonVariant = 'default' | 'active';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button = ({ onPress, title, variant = 'default', disabled, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        variant === 'active' && styles.activeButton,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      <Text style={[
        styles.text,
        variant === 'active' && styles.activeText,
        disabled && styles.disabledText,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 100,
    backgroundColor: colors.Teal['default'].value,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    height: 48
  },
  activeButton: {
    backgroundColor: colors.Teal['default'].value,
  },
  disabledButton: {
    backgroundColor: colors.Teal['default'].value,
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.Core['white'].value,
    fontFamily: "DM-Sands"
  },
  activeText: {
    color: colors.Core['white'].value,
  },
  disabledText: {
    color: colors.Core['white'].value,
  },
});