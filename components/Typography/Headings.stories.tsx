import React from 'react';
import { View } from 'react-native';
import { Headings } from './Headings';

export default {
  title: 'Style Guide/Typography/Headings',
  component: Headings,
};

export const AllHeadings = () => (
  <View style={{ padding: 20 }}>
    <Headings
      h1="Heading 1"
      h2="Heading 2"
      h3="Heading 3"
      subheader="This is a subheader text that provides additional context"
    />
  </View>
);

export const H1Only = () => (
  <View style={{ padding: 20 }}>
    <Headings
      h1="Main Heading"
      subheader="With supporting text below"
    />
  </View>
);

export const H2WithSubheader = () => (
  <View style={{ padding: 20 }}>
    <Headings
      h2="Section Title"
      subheader="Detailed explanation of this section"
    />
  </View>
);

export const CustomColor = () => (
  <View style={{ padding: 20 }}>
    <Headings
      h1="Colored Heading"
      h2="Secondary Title"
      subheader="With custom color applied"
      color="#3B82F6"
    />
  </View>
);