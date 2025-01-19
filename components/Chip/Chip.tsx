import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors'

export interface ChipProps {
  label: string;
}

const Chip = ({ label }: ChipProps) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>
        {label}
      </Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.Grey['lightest-grey'].value,
    borderRadius: 100,
    alignSelf: 'flex-start',
    height: 25,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  label: {
    fontSize: 12,
    color: colors.Core['black'].value,
    marginRight: 4,
    fontFamily: 'DM Sans',
    fontWeight: 500
  },
});