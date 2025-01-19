import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors} from '../../constants/colors'
import { IconButton } from '../Button/IconButton'
import Card from '../Card/Card';
import { CardVariantsProps } from '../../constants/cards';


export interface PopupSelectorProps {
  visible: boolean;
  onClose: () => void;
  cards: CardVariantsProps[];
  selectedCard?: CardVariantsProps;
  onSelect: (card: CardVariantsProps) => void;
  title?: string;
}

const { height } = Dimensions.get('window');

export const PopupSelector = ({
  visible,
  onClose,
  cards,
  selectedCard,
  onSelect,
  title = 'Select exercise',
}: PopupSelectorProps) => {
  const handleCardPress = (card: CardVariantsProps) => {
    onSelect(card);
    onClose();
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <IconButton name={"close"} onPress={onClose}/>
            </TouchableOpacity>
            <View style={styles.heading}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <ScrollView style={styles.optionsList}>
          {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                color={card.color}
                headerText={card.name}
                subHeaderText={card.blurb}
                chipText={card.time}
                onPress={() => handleCardPress(card)}
                disabled={false}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.Core['black'].value,
    justifyContent: 'flex-end',
    opacity: .8
  },
  container: {
    backgroundColor: colors.Core['white'].value,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: height * 0.7,
    boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
    gap: 20,
  },
  heading: {
    flexDirection: 'row',  
    alignSelf: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.Core['black'].value,
    fontFamily: "DM-Sans",
    textAlign: 'center'
  },
  optionsList: {
    padding: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: '#EFF6FF',
  },
  optionText: {
    fontSize: 16,
    color: '#1F2937',
  },
  selectedOptionText: {
    color: '#3B82F6',
    fontWeight: '500',
  },
});