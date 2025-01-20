import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { IconButton } from '@/components/Button/IconButton';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { Toggle } from '@components/Toggle/Toggle';
import { WeekDaySelect } from '@components/MultiSelect/WeekDaySelect';
import { TimeInput } from '@components/Input/TimeInput';
import { Button } from '@components/Button/Button';
import { PopupSelector } from '@components/PopupSelector/PopupSelector';
import { useStore } from '@store/useStore';
import CardVariants, { CardVariantsProps } from '@constants/cards';
import { Headings } from '@components/Typography/Headings';
import { colors } from '@/constants/colors';

const validationSchema = Yup.object().shape({
  exerciseId: Yup.number().required('Please select an exercise'),
  type: Yup.string().oneOf(['habit', 'once']).required(),
  time: Yup.date().required(),
  days: Yup.array().when('type', {
    is: 'habit',
    then: (schema) => schema.min(1, 'Please select at least one day'),
  }),
});

const ScheduleScreen = () => {
  const navigation = useNavigation();
  const [showSelector, setShowSelector] = useState(false);
  const [resetDatePicker, setResetDatePicker] = useState(false);
  const addExercise = useStore((state) => state.addExercise);
  

  const initialValues = {
    exerciseId: 0,
    card: undefined,
    type: 'habit' as const,
    time: new Date(),
    timeStr: '',
    days: [] as number[],
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("The form was successful!");
    
    addExercise({
      id: Date.now(),
      ...values,
    });
    Toast.show({
        type: 'info',
        text1: 'Your changes have been saved.',
        onHide: () => {
            navigation.goBack();
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, values, setFieldValue, isValid }) => (
          <View style={styles.content}>
            <View style={styles.header}>
               <IconButton name="arrow-back" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.headerTitle}>
                <Headings h1="Schedule an exercise" />
            </View>
            <View style={styles.form}>
              <View style={styles.section}>
                <Headings subheader="EXERCISE" />
                <Dropdown
                  card={CardVariants.find(card => card.id === values.exerciseId) || undefined}
                  onPress={() => setShowSelector(true)}
                />
              </View>

              <View style={styles.section}>
                <Headings subheader="REPEAT" />
                <Toggle
                  value={values.type}
                  onChange={(value) => {
                    if(values.type !== value) {
                        setFieldValue('type', value);
                        setFieldValue('timeStr', '');
                        setResetDatePicker(true);
                    }
                  }
                }
                />
              </View>

              {values.type === 'habit' && (
                <View style={styles.section}>
                  <Headings subheader="ON THESE DAYS" />
                  <WeekDaySelect
                    selectedDays={values.days}
                    onChange={(days) => {
                    setFieldValue('days', days)
                    }}
                  />
                </View>
              )}

              <View style={styles.section}>
                <Headings subheader="NOTIFY ME" />
                <TimeInput
                  value={values.time}
                  onChange={(datetime) => {
                    setFieldValue('time', datetime);
                    setFieldValue('timeStr', datetime.toISOString());
                }}
                  placeholder={values.type==='habit'? "Select a time" : "Select a date/time"}
                  mode={values.type==='habit'? "time" : "datetime"}
                  reset={resetDatePicker}
                />
              </View>
            </View>

            <Button
              title="Save"
              onPress={() => handleSubmit()}
              disabled={!isValid}
              style={styles.saveButton}
            />

            <PopupSelector
              visible={showSelector}
              onClose={() => setShowSelector(false)}
              cards={CardVariants}
              selectedCard={values?.card}
              onSelect={(cardSelected) => {
                setFieldValue('exerciseId', cardSelected.id);
                setFieldValue('card', CardVariants.find(card => card.id === cardSelected.id) || undefined)

                setShowSelector(false);
              }}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Core['white'].value,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    gap: 10,
    paddingTop: 24,
    paddingBottom: 24,
    marginTop: 10,
  },
  backButton: {
    marginRight: 16,
  },
  form: {
    flex: 1,
    gap: 24,
    marginTop: 20
  },
  section: {
    gap: 8,
    paddingBottom: 22,
  },
  saveButton: {
    marginTop: 'auto',
  },
});

export default ScheduleScreen;