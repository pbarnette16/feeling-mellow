import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable, Dimensions, } from 'react-native';
import { IconButton } from '../Button/IconButton';
import { colors} from '../../constants/colors';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

const { height } = Dimensions.get('window');

export interface TimeInputProps {
  value: Date;
  onChange: (value: DateTimePickerEvent) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TimeInput = ({ value, onChange, placeholder = 'Select a time', disabled }: TimeInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState(value);
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);
  const [timeSet, setTimeSet] = useState(false);

  const showTimepicker = () => {
    setShow(true);
  };

  const onClose = () => setShow(false);

  const handleClear =  () => {
    setTimeSet(false);
    setDate(new Date());
  };

  return (
    <>
    <View style={[
      styles.container,
      isFocused && styles.focused,
      disabled && styles.disabled
    ]}>
      {!timeSet && (
        <IconButton name="add" onPress={() => showTimepicker()} disabled={disabled} />
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.input, timeSet && styles.selected]}>{!timeSet ? placeholder : date.toLocaleTimeString('en-AU', { timeStyle: "short"}) }</Text>
      </View>
      
      {timeSet && (
        <View style={styles.clearBtn}>
          <IconButton name="trash-2" onPress={() => handleClear()} disabled={disabled} />
        </View>
      )}
    </View>
    {show && (
      <Modal
          visible={show}
          transparent
          animationType="slide"
          onRequestClose={onClose}
        >
          <View style={styles.overlay}>
            <View style={styles.popupContainer}>
              <Text>Please select a time: </Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={(event, date)=> {
                  setDate(date);
                  setShow(false);
                  setTimeSet(true);
                }}
                display="default"
              />
            </View>
      </View>
    </Modal>
    )}
    
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.Core['white'].value,
    borderRadius: 14,
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)',
    gap: 16,
    height: 68,
  },
  popupContainer: {
    backgroundColor: colors.Core['white'].value,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: height * 0.7,
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)',
    padding: 20,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: 48,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.Core['black'].value,
    justifyContent: 'flex-end',
    opacity: .8
  },
  focused: {
    borderColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: '#F3F4F6',
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: colors.Grey['dark-grey'].value,
    fontWeight: 400,
    paddingTop: 15,
  },
  selected: {
    color: colors.Core['black'].value,
    fontWeight: 600,
  },
  clearBtn: {
    position: 'absolute',
    right: 12
  }
});