import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ShadowsSwatch {
  name: string;
  value: string;
}

const colors: Record<string, ShadowsSwatch[]> = {
  'shadows': [
    { name: 'drop-shadow', value: '#0000001A', textColor: '#1F2937' },
    { name: 'white', value: '#FFFFFF', textColor: '#1F2937' },
    { name: 'black', value: '#000000', textColor: '#FFFFFF' },
  ],
  
};

export const ShadowPalette = () => {
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