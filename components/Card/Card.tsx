import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors'; // Import your color palette
import Chip, {ChipProps} from '../Chip/Chip'

export interface CardProps {
  color: string;
  headerText: string;
  subHeaderText: string;
  chipText: ChipProps['label'];
  onPress:  (position:number) => void;
  disabled?: boolean;
  id: number;
}

const Card = ({ id, color, headerText, subHeaderText, chipText, onPress, disabled}: CardProps) => {
  
  return (
    <TouchableOpacity onPress={() => onPress(id)}
    disabled={disabled} style={[styles.container, disabled && styles.disabled]}>
    <View >
      {/* Colored bar */}
      <View style={[styles.bar, { backgroundColor: color }]}>
        <View style={styles.barContent} />
      </View>
      <View style={styles.content}>
        {/* Header component */}
        <Header headerText={headerText} />

        {/* Sub-header component */}
        <SubHeader subHeaderText={subHeaderText} />
      </View>
      <View style={styles.chip}>
          {/* Pill component */}
          <Chip label={chipText} />
      </View>
      
    </View>
    </TouchableOpacity>
  );
};

// Card styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.Core['white'].value,
    marginBottom: 20
  },
  bar: {
    width: 14,
    marginRight: 16,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 5
  },
  barContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  content: {
    paddingTop: 0,
    gap: 10,
    marginLeft: 16 +8,
    maxWidth: 200
  },
  chip: {
    position: 'absolute',
    right: 0,
    top: -4
  },
  disabled: {
    opacity: 0.5
  }
});

// Header component
interface HeaderProps {
  headerText: string;
}

const Header = ({ headerText }: HeaderProps) => {
  return (
    <View style={headerStyles.header}>
      <Text style={[headerStyles.label]}>
        {headerText}
      </Text>
    </View>
  );
};

// Header styles
const headerStyles = StyleSheet.create({
  header: {
    marginBottom: 0,
    paddingBottom: 0
  },
  label: {
    color: colors.Core['black'].value,
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontSize: 16
  },
});

// SubHeader component
interface SubHeaderProps {
  subHeaderText: string;
}

const SubHeader = ({ subHeaderText }: SubHeaderProps) => {
  return (
    <View style={subHeaderStyles.subHeader}>
      <Text style={[subHeaderStyles.label]}>
        {subHeaderText}
      </Text>
    </View>
  );
};

// SubHeader styles
const subHeaderStyles = StyleSheet.create({
  subHeader: {
    marginBottom: 0,
  },
  label: {
    color: colors.Grey['medium-grey-3'].value,
    fontFamily: 'DM Sans',
    fontWeight: 400,
    fontSize: 14
  },
});

export default Card;