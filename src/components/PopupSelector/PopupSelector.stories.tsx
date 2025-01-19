import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { PopupSelector } from './PopupSelector';
import CardVariants, { CardVariantsProps } from '@constants/cards';



export default {
  title: 'Components/PopupSelector',
  component: PopupSelector,
};


export const WithCards = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardVariantsProps | undefined>();

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Show Card Selector"
        onPress={() => setVisible(true)}
      />
      <PopupSelector
        visible={visible}
        onClose={() => setVisible(false)}
        cards={CardVariants}
        selectedCard={selectedCard}
        onSelect={(card) => {
          setSelectedCard(card);
          console.log('Selected card:', CardVariants.find(card => card.id === id));
        }}
        title="Select a Card"
      />
      <View>
        <Text>Card selected {selectedCard?.id}</Text>
      </View>
    </View>
  );
};

export const WithPreselectedCard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(CardVariants.find(card => card.id === 42)); // Worry time card

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Show Card Selector"
        onPress={() => setVisible(true)}
      />
      <PopupSelector
        visible={visible}
        onClose={() => setVisible(false)}
        cards={CardVariants}
        selectedCard={selectedCard}
        onSelect={(card) => {
          setSelectedCard(card);
          console.log('Selected card:', CardVariants.find(card => card.id === id));
        }}
        title="Select a Card"
      />
      <View>
        <Text>Card selected {selectedCard?.id}</Text>
      </View>
    </View>
  );
};