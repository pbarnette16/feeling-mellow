import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ColorSwatch {
  name: string;
  value: string;
  textColor?: string;
}

const colors: Record<string, ColorSwatch[]> = {
  'core': [
    { name: 'teal', value: '#407178', textColor: '#1F2937' },
    { name: 'white', value: '#FFFFFF', textColor: '#1F2937' },
    { name: 'black', value: '#000000', textColor: '#FFFFFF' },
  ],
  'Grey': [
    { name: 'lightest-grey', value: '#EFF6FF', textColor: '#1F2937' },
    { name: 'light-grey-1', value: '#DBEAFE', textColor: '#1F2937' },
    { name: 'medium-grey-1', value: '#BFDBFE', textColor: '#1F2937' },
    { name: 'medium-grey-2', value: '#93C5FD', textColor: '#1F2937' },
    { name: 'medium-grey-3', value: '#60A5FA', textColor: '#FFFFFF' },
    { name: 'dark-grey', value: '#3B82F6', textColor: '#FFFFFF' },
  ],
  'Teal': [
    { name: 'teal-dark', value: '#FEF2F2', textColor: '#1F2937' },
    { name: 'teal-light', value: '#FEE2E2', textColor: '#1F2937' },
    { name: 'teal-soft', value: '#F87171', textColor: '#FFFFFF' },
    { name: 'red-500', value: '#EF4444', textColor: '#FFFFFF' }, 
    { name: 'red-600', value: '#DC2626', textColor: '#FFFFFF' },
  ],
  'Classification': [
    { name: 'orange', value: '#FFCC99', textColor: '#1F2937' },
    { name: 'purple', value: '#E1C7FF', textColor: '#1F2937' },
    { name: 'blue', value: '#AAC0FF', textColor: '#FFFFFF' },
    { name: 'green', value: '#CBF8D0', textColor: '#FFFFFF' },
  ],
  'Error': [
    { name: 'error-red', value: '#FEF2F2', textColor: '#1F2937' },
    { name: 'error-deep-red', value: '#FEE2E2', textColor: '#1F2937' },
  ],
  
};

export const ColorPalette = () => {
  return (
    <ScrollView style={styles.container}>
      {Object.entries(colors).map(([category, swatches]) => (
        <View key={category} style={styles.category}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <View style={styles.swatchGrid}>
            {swatches.map((swatch) => (
              <View
                key={swatch.name}
                style={[styles.swatch, { backgroundColor: swatch.value }]}
              >
                <Text style={[styles.swatchName, { color: swatch.textColor }]}>
                  {swatch.name}
                </Text>
                <Text style={[styles.swatchValue, { color: swatch.textColor }]}>
                  {swatch.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  swatchGrid: {
    gap: 8,
  },
  swatch: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swatchName: {
    fontSize: 16,
    fontWeight: '500',
  },
  swatchValue: {
    fontSize: 16,
    fontWeight: '400',
  },
});