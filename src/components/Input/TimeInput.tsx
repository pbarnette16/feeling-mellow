import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { IconButton } from '@components/Button/IconButton';
import { colors} from '../../constants/colors';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import { Button } from '@components/Button/Button';

const { height } = Dimensions.get('window');

export enum Mode {
  date = "date",
  time = "time",
  datetime = "datetime",
}

type T_Mode = keyof typeof Mode;

export interface TimeInputProps {
  value: Date;
  onChange: (value: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  mode: T_Mode;
  reset: boolean;
}

const formatDate = ({ mode, date }: {mode: Mode, date: Date}) => {
  let outStr = '';
  if (Mode.datetime === mode) {
      const dateStr = date.toLocaleDateString('en-AU', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });
      const timeStr = date.toLocaleTimeString('en-AU', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).toLowerCase();

      outStr = dateStr.replace(',', '') + ', ' + timeStr;
  } else {
    outStr = date.toLocaleString('en-AU', {timeStyle: "short"});
  }
  return outStr;
}

export const TimeInput = ({ value, onChange, placeholder = 'Select a time', disabled, mode, reset }: TimeInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState<Date>(value);
  const [show, setShow] = useState(false);
  const [timeSet, setTimeSet] = useState(false);
  const [displayDate, setDisplayDate] = useState('');

  const showTimepicker = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
    onChange(date);
    const dateStr = formatDate({mode, date});
    setDisplayDate(dateStr);
    setTimeSet(true);
  } 

  const handleClear =  () => {
    setTimeSet(false);
    setDate(new Date());
  };

  const onPress = () => {
    if(!timeSet) {
      showTimepicker()
    }
    else {
      handleClear()
    }
  }

 const extractNewDate = (event: DateTimePickerEvent, date?: Date) => {

  if(date) {
    setDate(date);
  }
  
 }

 useEffect(()=>{
  if(reset) {
    setTimeSet(false);
  }
 }, [reset]);
 

  return (
    <>
    
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          disabled && styles.disabled
        ]}>
        <View style={[
      styles.container,
      isFocused && styles.focused,
      disabled && styles.disabled
    ]}>
        
        {!timeSet && (
          <IconButton name="add" onPress={onPress} disabled={disabled} />
        )}
        <View style={styles.textContainer}>
          <Text style={[styles.input, timeSet && styles.selected]}>{!timeSet ? placeholder : displayDate}</Text>
        </View>
        
        {timeSet && (
          <View style={styles.clearBtn}>
            <IconButton name="trash-2" onPress={onPress} disabled={disabled} />
          </View>
        )}
      
      </View>
      </TouchableOpacity>

    {show && (
      <Modal
          visible={show}
          animationType="slide"
          onRequestClose={onClose}
        >
          <View style={styles.overlay}>
            <View style={styles.popupContainer}>
              
                <Text>{placeholder} </Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  onChange={extractNewDate}
                  display="inline"
                  minimumDate={new Date()}
                />

              
                <Button title="Confirm" style={styles.buttonPlacement} onPress={() => onClose()} />
              
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
    gap: 20,
    flexDirection: 'column',
  
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: 48,
  },
  calenderContainer: {
    backgroundColor: 'pink'
  },
  buttonContainer: {
    alignSelf: 'flex-end'
    
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