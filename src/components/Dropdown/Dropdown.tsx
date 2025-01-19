import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {IconButton} from '../Button/IconButton';
import { colors} from '../../constants/colors';
import {CardVariantsProps} from '../../constants/cards';

export interface DropdownProps {
  card: CardVariantsProps | undefined;
  placeholder?: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Dropdown = ({
  card,
  placeholder = 'Select activity',
  onPress,
  onChange,
  disabled
}: DropdownProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled]}
    >
      <View style={styles.resultContainer}>
        <View style={[card && styles.hasValue]}>
          <Text style={[
            styles.text,
            styles.placeholder,
            disabled && styles.disabledText
          ]}>
            {placeholder}
          </Text>
        </View>
        <View style={[!card && styles.hasValue]}>
           {/* Colored bar */}
          <View style={[styles.swatch, { backgroundColor: card?.color }]}>
            <View style={styles.swatchContent} />
          </View>
          <View style={styles.selected}>
            <Text style={[
              styles.text,
              disabled && styles.disabledText
            ]}>
              {card?.name}
            </Text>
          </View>
          
        </View>


      </View>
      
      <View style={styles.icon}>
        <IconButton
          name="chevron-down"
          size={20}
          color={disabled ? '#9CA3AF' : '#1F2937'}
          background={false}
          onPress={onPress}
        />
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    backgroundColor: colors.Core['white'].value,
    minHeight: 68,
    gap: 16, 
    paddingTop: 10,
    paddingRight: 32,
    paddingBottom: 10,
    paddingLeft: 20, 
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)'
  },
  resultContainer: {
    width: '100%',
    gap: 16
  },
  hasValue: {
    display: 'none' 
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: colors.Core['black'].value,
    fontFamily: "DM-Sands",
  },
  placeholder: {
    fontSize: 16,
    color: colors.Core['black'].value,
    fontFamily: "DM-Sands-Italic",
    fontStyle: 'italic'
  },
  disabledText: {
    color: '#9CA3AF',
  },
  icon: {
    right: 16,
    position: 'absolute'
  },
  swatch: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: -14,
    left: -8,
    borderRadius: 10
  },
  swatchContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  selected: {
    marginLeft: 16 + 38
  }
});