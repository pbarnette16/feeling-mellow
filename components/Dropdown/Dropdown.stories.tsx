import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from './Dropdown';
import { PopupSelector } from '../PopupSelector/PopupSelector';
import CardVariants, {CardVariantsProps} from '../../constants/cards';


export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<number | undefined>();
  
  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        card={CardVariants.find(card => card.id === selectedId)}
        onPress={() => setVisible(true)}
      />
      <PopupSelector
        visible={visible}
        onClose={() => setVisible(false)}
        cards={CardVariants}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id);
          console.log('Selected card:', CardVariants.find(card => card.id === id));
        }}
      />
    </View>
  );
};

export const WithSelectedCard = () => {
    const [visible, setVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(42); // Worry time card

  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        value={selectedId}
        onPress={() => setVisible(true)}
      />
      <PopupSelector
        visible={visible}
        onClose={() => setVisible(false)}
        cards={CardVariants}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
    </View>
  );
};

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <Dropdown
      value="Option 1"
      onPress={() => {}}
      disabled
    />
  </View>
);