import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '@store/useStore';
import { Button } from '@components/Button/Button';
import { Headings } from '@components/Typography/Headings';
import CardVariants from '@/constants/cards';

const HomeScreen = () => {
  const navigation = useNavigation();
  const exercises = useStore((state) => state.exercises);

  const getExerciseName = (exerciseId: number) => {
    return CardVariants.find(card => card.id === exerciseId)?.name || 'Unknown Exercise';
  };

  const formatDays = (days: number[]) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days.map(day => dayNames[day]).join(', ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Headings h1="My Exercises" />
        
        <ScrollView style={styles.scrollView}>
          {exercises.length === 0 ? (
            <Text style={styles.emptyMessage}>No Exercises added</Text>
          ) : (
            exercises.map((exercise) => (
              <View key={exercise.id} style={styles.exerciseItem}>
                <Text style={styles.exerciseName}>
                  {getExerciseName(exercise.id)}
                </Text>
                <Text style={styles.exerciseDetail}>
                  Type: {exercise.type === 'habit' ? 'Habit' : 'Once-off'}
                </Text>
                {exercise.type === 'habit' && exercise.days && (
                  <Text style={styles.exerciseDetail}>
                    Days: {formatDays(exercise.days)}
                  </Text>
                )}
                {exercise.time && (
                  <Text style={styles.exerciseDetail}>
                    Time: {exercise.time}
                  </Text>
                )}
              </View>
            ))
          )}
        </ScrollView>

        <Button
          title="Add Exercise"
          onPress={() => navigation.navigate('Schedule')}
          style={styles.addButton}
        />
      </View>
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
  scrollView: {
    flex: 1,
    marginTop: 16,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 16,
    marginTop: 24,
  },
  exerciseItem: {
    padding: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  exerciseDetail: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
  addButton: {
    marginTop: 16,
  },
});

export default HomeScreen;