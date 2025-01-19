import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import {colors} from '../../constants/colors'

export interface IconButtonProps {
  onPress: () => void;
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle;
  background?: boolean;
}

export const IconButton = ({
  onPress,
  name,
  size = 18,
  color = '#1F2937',
  disabled,
  style,
  background = true
}: IconButtonProps) => {

  switch (name) {
    case 'trash-2':
      size = 18
    case 'plus':
      size = 24
    case 'arrow-back':
      size = 18
    default:
      size = 18
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled, !background && styles.noBackground, style]}
    >
      {(() => {
        switch (name) {
          case 'trash-2':
            return <Feather name={name} size={size} color={disabled ? '#9CA3AF' : color} />
          case 'plus':
            return <Entypo name={name} size={size} color={disabled ? '#9CA3AF' : color} />
          default:
            return <Ionicons name={name} size={size} color={disabled ? '#9CA3AF' : color} />
        }
      })()}
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: colors.Grey['lightest-grey'].value,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  disabled: {
    opacity: 0.5,
  },
  noBackground: {
    backgroundColor: ''
  }
});