import React, {useState}  from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Card, { CardProps } from './Card';
import CardVariants, { CardVariantsProps } from '../../constants/cards';

export default {
  title: 'Components/Card',
  component: Card
};


export const Default = () => {
  const [value, setValue] = useState<number>(0);
  const onChange = (value: number) => {
    alert(`Card ${value} presed`);
    setValue(value)
  };
  return(
    <View style={{ padding: 20 }}>
      <ScrollView style={styles.container}>
              {CardVariants.map((option:CardVariantsProps, index) => (
                <Card key={index} id={option.id} color={option.color} headerText={option.name} subHeaderText={option.blurb} chipText={option.time} onPress={onChange} />
              ))}
      </ScrollView>
    </View>
  );
}
  
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'column',
    padding: 20,
  },
});