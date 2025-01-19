import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { Toggle } from '@components/Toggle/Toggle';
import { WeekDaySelect } from '@components/MultiSelect/WeekDaySelect';
import { TimeInput } from '@components/Input/TimeInput';
import { Button } from '@components/Button/Button';
import { PopupSelector } from '@components/PopupSelector/PopupSelector';
import { useStore } from '@store/useStore';
import CardVariants from '@constants/cardVariants';
import { Headings } from '@components/Typography/Headings';

const validationSchema = Yup.object().shape({
  exerciseId: Yup.number().required('Please select an exercise'),
  type: Yup.string().oneOf(['habit', 'once']).required(),
  time: Yup.string().when('type', {
    is: 'once',
    then: (schema) => schema.required('Please select a time'),
  }),
  days: Yup.array().when('type', {
    is: 'habit',
    then: (schema) => schema.min(1, 'Please select at least one day'),
  }),
});

const ScheduleScreen = () => {
  const navigation = useNavigation();
  const [showSelector, setShowSelector] = useState(false);
  const addExercise = useStore((state) => state.addExercise);

  const initialValues = {
    exerciseId: 0,
    type: 'habit' as const,
    time: '',
    days: [] as number[],
  };

  const handleSubmit = (values: typeof initialValues) => {
    addExercise({
      id: Date.now(),
      ...values,
    });
    navigation.goBack();
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
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="#1F2937" />
              </TouchableOpacity>
              <Headings h1="Schedule an exercise" />
            </View>

            <View style={styles.form}>
              <View style={styles.section}>
                <Headings h3="EXERCISE" />
                <Dropdown
                  card={CardVariants.find(card => card.id === values.exerciseId) || undefined}
                  onPress={() => setShowSelector(true)}
                />
              </View>

              <View style={styles.section}>
                <Headings h3="REPEAT" />
                <Toggle
                  value={values.type}
                  onChange={(value) => setFieldValue('type', value)}
                />
              </View>

              {values.type === 'habit' && (
                <View style={styles.section}>
                  <Headings h3="ON THESE DAYS" />
                  <WeekDaySelect
                    selectedDays={values.days}
                    onChange={(days) => setFieldValue('days', days)}
                  />
                </View>
              )}

              <View style={styles.section}>
                <Headings h3="NOTIFY ME" />
                <TimeInput
                  value={values.time}
                  onChange={(time) => setFieldValue('time', time)}
                  placeholder="Select a time"
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
              selectedCard={values}
              onSelect={(id) => {
                setFieldValue('exerciseId', id);
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
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
  },
  form: {
    flex: 1,
    gap: 24,
  },
  section: {
    gap: 8,
  },
  saveButton: {
    marginTop: 'auto',
  },
});

export default ScheduleScreen;