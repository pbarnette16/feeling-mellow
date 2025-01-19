import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export interface HeadingsProps {
  h1?: string;
  h2?: string;
  h3?: string;
  subheader?: string;
  color?: string;
}

export const Headings = ({
  h1,
  h2,
  h3,
  subheader,
  color = '#1F2937'
}: HeadingsProps) => {
  return (
    <View style={styles.container}>
      {h1 && <Text style={[styles.h1, { color }]}>{h1}</Text>}
      {h2 && <Text style={[styles.h2, { color }]}>{h2}</Text>}
      {h3 && <Text style={[styles.h3, { color }]}>{h3}</Text>}
      {subheader && <Text style={[styles.subheader, { color: '#6B7280' }]}>{subheader}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    fontFamily: "DM-Sands"
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: "DM-Sands"
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: "DM-Sands"
  },
  subheader: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: "DM-Sands"
  },
});